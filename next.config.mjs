/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: "localhost" }, 
        { hostname: "randomuser.me" },
        { hostname: "www.mindgrasp.ai" },
        { hostname: "banner2.cleanpng.com" }
      ],
    },
  };
  
  export default nextConfig;
  