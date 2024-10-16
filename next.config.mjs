/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/1c/:path*",
                destination: `${process.env.BASE_URL}/:path*`,
            },
            {
                source: "/api/time-control/:path*",
                destination: `${process.env.TIME_URL}/:path*`,
            },
            {
                source: "/api/auth-service/:path*",
                destination: `${process.env.AUTH_URL}/:path*`,
            },
        ];
    },
};

export default nextConfig;
