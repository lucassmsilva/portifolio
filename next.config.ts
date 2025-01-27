// next.config.mjs
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  }
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // other config options
};

export default withMDX(nextConfig);