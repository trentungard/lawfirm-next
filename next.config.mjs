/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
        dangerouslyAllowSVG: true,
        domains: ['cdn.sanity.io'], // Ensure you add the Sanity domain here
      },
};

export default nextConfig;
