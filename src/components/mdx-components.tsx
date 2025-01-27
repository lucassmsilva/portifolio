// components/mdx-components.tsx
import { Typography } from '@mui/material';
import type { MDXComponents } from 'mdx/types';
import type { JSX } from 'react';


type HeadingProps =  JSX.IntrinsicElements['h1'];
type ParagraphProps =  JSX.IntrinsicElements['p'];

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }: HeadingProps) => (
    <Typography variant="h1" component="h1" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <Typography variant="h2" component="h2" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <Typography variant="h3" component="h3" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h4: ({ children, ...props }: HeadingProps) => (
    <Typography variant="h4" component="h4" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h5: ({ children, ...props }: HeadingProps) => (
    <Typography variant="h5" component="h5" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h6: ({ children, ...props }: HeadingProps) => (
    <Typography variant="h6" component="h6" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  p: ({ children, ...props }: ParagraphProps) => (
    <Typography variant="body1" paragraph {...props}>
      {children}
    </Typography>
  ),
};