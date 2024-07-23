/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "minio-s3.caprover.credot-web.com",
      },
      {
        hostname: "minio-api.service.lstc.com.tw",
      },
    ],
  },
};

module.exports = nextConfig;
