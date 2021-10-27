module.exports = {
  async headers() {
    return [
      {
        source: '/blog/:post(\\d{1,})',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: ':nosniff',
          },
        ],
      },
    ],
  },
}
