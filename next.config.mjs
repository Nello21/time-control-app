/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/1c/:path*",
                destination:
                    "http://192.168.0.223/worktruck/hs/wt_panel/:path*",
            },
            {
                source: "/api/time-control/:path*",
                destination: "http://192.168.0.190:5053/api/:path*",
            },
        ];
    },
};

export default nextConfig;
