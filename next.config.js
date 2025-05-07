/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['image.tmdb.org'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.youtube.com",
          },
        ],
      },
    ];
  },
};
