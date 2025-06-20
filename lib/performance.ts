// Performance monitoring and optimization utilities

export function reportWebVitals(metric: any) {
  // Log performance metrics in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric.name}:`, metric.value, metric.unit);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
}

// Preload critical resources
export function preloadResources() {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/hero-vid.mp4',
    '/hero-light.png',
    // Add other critical resources
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    
    if (resource.endsWith('.mp4')) {
      link.as = 'video';
    } else if (resource.endsWith('.png') || resource.endsWith('.jpg') || resource.endsWith('.webp')) {
      link.as = 'image';
    }
    
    link.href = resource;
    document.head.appendChild(link);
  });
}

// Intersection Observer for lazy loading
export function createLazyLoader() {
  if (typeof window === 'undefined') return null;

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Trigger lazy loading
          if (target.dataset.src) {
            if (target instanceof HTMLImageElement) {
              target.src = target.dataset.src;
            }
            target.removeAttribute('data-src');
          }
        }
      });
    },
    {
      rootMargin: '50px 0px', // Start loading 50px before entering viewport
      threshold: 0.1,
    }
  );
}

// Performance optimization utilities
export const PerfUtils = {
  // Debounce function for expensive operations
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for scroll/resize events
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Request Idle Callback wrapper
  runWhenIdle(callback: () => void, timeout = 5000) {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback, { timeout });
    } else {
      setTimeout(callback, 1);
    }
  },

  // Check if user prefers reduced motion
  prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Get connection quality
  getConnectionQuality(): 'slow' | 'fast' | 'unknown' {
    if (typeof navigator === 'undefined') return 'unknown';
    
    const connection = (navigator as any).connection;
    if (!connection) return 'unknown';
    
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 'slow';
    }
    return 'fast';
  },
};

// Performance budget monitoring
export class PerformanceBudget {
  private budgets = {
    LCP: 2500, // Largest Contentful Paint should be under 2.5s
    FID: 100,  // First Input Delay should be under 100ms
    CLS: 0.1,  // Cumulative Layout Shift should be under 0.1
    TTI: 3800, // Time to Interactive should be under 3.8s
  };

  check(metric: string, value: number): boolean {
    const budget = this.budgets[metric as keyof typeof this.budgets];
    if (!budget) return true;
    
    const withinBudget = value <= budget;
    
    if (!withinBudget && process.env.NODE_ENV === 'development') {
      console.warn(
        `⚠️ Performance Budget Exceeded: ${metric} (${value}) > ${budget}`
      );
    }
    
    return withinBudget;
  }
}

export const performanceBudget = new PerformanceBudget();

// Memory management for heavy components
export function cleanupHeavyComponents() {
  // Force garbage collection in development
  if (process.env.NODE_ENV === 'development' && (window as any).gc) {
    (window as any).gc();
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
} 