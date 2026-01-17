/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  basePath: '/pulseroom-landing', 
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;