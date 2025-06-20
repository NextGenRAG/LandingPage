interface CourseSearchParams {
  course_name?: string;
  course_code?: string;
  school?: string;
  prof?: string;
  semester?: string;
  description?: string;
  similarity_threshold?: number;
  max_results?: number;
}

interface Course {
  course_name: string;
  course_code: string;
  // Add other fields as needed when we expand functionality
}

import { cachedFetch, CACHE_KEYS, CACHE_TTL } from '../cache';

export async function searchCourses(params: CourseSearchParams = {}): Promise<Course[]> {
  const API_URL = '/api';
  const endpoint = `${API_URL}/courses/search`;
  
  try {
    const requestBody = {
      ...params,
      similarity_threshold: params.similarity_threshold || 0.3,
      max_results: params.max_results || 100
    };

    // Create cache key based on search parameters
    const cacheKey = CACHE_KEYS.COURSE_SEARCH(JSON.stringify(requestBody));
    
    // Use cached fetch with 10-minute TTL
    const data = await cachedFetch<Course[]>(
      endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      },
      cacheKey,
      CACHE_TTL.MEDIUM
    );

    if (!Array.isArray(data)) {
      console.error('Received non-array data:', data);
      return [];
    }
    return data;
  } catch (error) {
    console.error('Error in searchCourses:', error);
    throw error;
  }
} 