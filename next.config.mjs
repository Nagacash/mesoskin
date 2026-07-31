/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Pre-optimized WebP in /public; avoids broken local sharp optimizer on some setups
    unoptimized: true,
    formats: ["image/webp"],
  },
};

export default nextConfig;
