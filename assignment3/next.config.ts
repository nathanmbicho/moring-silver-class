import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ];
    },
  /* config options here */
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "ui-avatars.com",
            port: "",
            pathname: "/api/**",
        }]
    }
};

export default nextConfig;
