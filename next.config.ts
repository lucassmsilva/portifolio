// next.config.ts
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
  output: 'standalone',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  }
};

// Precisamos fazer essa conversão pois o withMDX retorna uma função
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withMDX(nextConfig as any) as NextConfig;