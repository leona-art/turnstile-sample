/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_SITE_KEY:process.env.NEXT_PUBLIC_SITE_KEY
    }
};

export default nextConfig;
