import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ];
  },
});
