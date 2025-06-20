/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: "http", hostname: "localhost" }, 
        { protocol: "https", hostname: "randomuser.me" },
        { protocol: "https", hostname: "www.mindgrasp.ai" },
        { protocol: "https", hostname: "banner2.cleanpng.com" }
      ],
    },
  };
  
  export default nextConfig;
  