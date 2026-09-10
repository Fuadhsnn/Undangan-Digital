import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow accessing the Next.js dev server from local network IP (e.g. mobile testing on Wi-Fi)
  allowedDevOrigins: ["192.168.18.4", "localhost:*"],
};

export default nextConfig;
