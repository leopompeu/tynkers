/** @type {import('next').NextConfig} */


module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent.cdninstagram.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}
