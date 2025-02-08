/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "cdn.sanity.io", 
          },
          // Add more patterns for different domains if necessary
        ],
      },
    
};

export default nextConfig;
