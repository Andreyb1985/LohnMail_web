/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // Block existing direct links before Next.js serves the public DMG file.
      beforeFiles: [
        {
          source: "/downloads/LohnMail-macOS.dmg",
          destination: "/api/downloads/macos",
        },
      ],
    };
  },
};

export default nextConfig;
