/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "minio-s3.caprover.credot-web.com",
      },
    ],
  },
};

module.exports = nextConfig;
