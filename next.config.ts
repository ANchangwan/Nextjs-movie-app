import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // images: {
    //     domains: ['image.tmdb.org'], // 외부 이미지 도메인 추가
    // },
    images: {
        remotePatterns:[
            {
                protocol:'https',
                hostname:'image.tmdb.org',
                pathname:'**',
            }

        ]
    },

};



export default nextConfig;

