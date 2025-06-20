// Cache utility for API responses and data
interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class Cache {
  private storage: Map<string, CacheItem<any>> = new Map();
  private maxSize: number = 100; // Maximum cache entries

  set<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): void {
    // Clean up expired entries if cache is getting full
    if (this.storage.size >= this.maxSize) {
      this.cleanup();
    }

    this.storage.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get<T>(key: string): T | null {
    const item = this.storage.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.storage.delete(key);
      return null;
    }

    return item.data;
  }

  delete(key: string): boolean {
    return this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.storage.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.storage.delete(key);
      }
    }
  }

  // Get cache statistics
  getStats() {
    return {
      size: this.storage.size,
      keys: Array.from(this.storage.keys()),
    };
  }
}

// Global cache instance
export const cache = new Cache();

// Cache keys
export const CACHE_KEYS = {
  COURSES: 'courses',
  COURSE_SEARCH: (query: string) => `courses:search:${query}`,
  USER_PROFILE: (id: string) => `user:${id}`,
} as const;

// Cache TTL values (in milliseconds)
export const CACHE_TTL = {
  SHORT: 2 * 60 * 1000,      // 2 minutes
  MEDIUM: 10 * 60 * 1000,    // 10 minutes
  LONG: 60 * 60 * 1000,      // 1 hour
  VERY_LONG: 24 * 60 * 60 * 1000, // 24 hours
} as const;

// Cached fetch wrapper
export async function cachedFetch<T>(
  url: string,
  options: RequestInit = {},
  cacheKey?: string,
  ttl: number = CACHE_TTL.MEDIUM
): Promise<T> {
  const key = cacheKey || `fetch:${url}:${JSON.stringify(options)}`;
  
  // Try to get from cache first
  const cached = cache.get<T>(key);
  if (cached) {
    return cached;
  }

  // Fetch and cache the result
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data: T = await response.json();
  cache.set(key, data, ttl);
  
  return data;
}

// React hook for cached data
import { useState, useEffect } from 'react';

export function useCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = CACHE_TTL.MEDIUM
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check cache first
        const cached = cache.get<T>(key);
        if (cached) {
          setData(cached);
          setLoading(false);
          return;
        }

        // Fetch new data
        const result = await fetcher();
        cache.set(key, result, ttl);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key, ttl]);

  return { data, loading, error, refetch: () => {
    cache.delete(key);
    setLoading(true);
  }};
} 