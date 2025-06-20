// Simple passthrough for production builds
const withBundleAnalyzer = (config) => config;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: "http", hostname: "localhost" }, 
        { protocol: "https", hostname: "randomuser.me" },
        { protocol: "https", hostname: "www.mindgrasp.ai" },
        { protocol: "https", hostname: "banner2.cleanpng.com" }
      ],
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    
    experimental: {
      optimizeCss: true,
      optimizeServerReact: true,
    },
    
    compress: true,
    poweredByHeader: false,
    
    webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
        config.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: -10,
              chunks: 'all',
            },
            magicui: {
              test: /[\\/]components[\\/]magicui[\\/]/,
              name: 'magicui',
              priority: 10,
              chunks: 'all',
            },
          },
        };
      }
      return config;
    },
    
    async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            { key: 'Cache-Control', value: 'public, s-maxage=60, stale-while-revalidate=300' },
          ],
        },
        {
          source: '/(_next/static|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.ico)',
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
        {
          source: '/(.*)',
          headers: [
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'X-XSS-Protection', value: '1; mode=block' },
          ],
        },
      ];
    },
  };
  
  export default withBundleAnalyzer(nextConfig);
  