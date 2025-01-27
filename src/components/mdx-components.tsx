// components/mdx-components.tsx
import { LabelImportant } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { ArrowRight, Check } from 'lucide-react';
import type { MDXComponents } from 'mdx/types';
import type { JSX } from 'react';

type HeadingProps = JSX.IntrinsicElements['h1'];
type ParagraphProps = JSX.IntrinsicElements['p'];
type ListProps = JSX.IntrinsicElements['ul'];
type OrderedListProps = JSX.IntrinsicElements['ol'];
type ListItemProps = JSX.IntrinsicElements['li'];

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }: HeadingProps) => (
    <Typography 
      variant="h1" 
      component="h1" 
      gutterBottom 
      sx={{ mt: 4 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <Typography 
      variant="h2" 
      component="h2" 
      gutterBottom 
      sx={{ mt: 4 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <Typography 
      variant="h3" 
      component="h3" 
      gutterBottom 
      sx={{ mt: 3 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h4: ({ children, ...props }: HeadingProps) => (
    <Typography 
      variant="h4" 
      component="h4" 
      gutterBottom 
      sx={{ mt: 3 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h5: ({ children, ...props }: HeadingProps) => (
    <Typography 
      variant="h5" 
      component="h5" 
      gutterBottom 
      sx={{ mt: 2 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h6: ({ children, ...props }: HeadingProps) => (
    <Typography 
      variant="h6" 
      component="h6" 
      gutterBottom 
      sx={{ mt: 2 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  p: ({ children, ...props }: ParagraphProps) => (
    <Typography 
      variant="body1" 
      paragraph 
      sx={{ 
        mt: 2,
        lineHeight: 1.7,
        '&:first-of-type': {
          mt: 0
        }
      }}
      {...props}
    >
      {children}
    </Typography>
  ),
  
  // Adicionando suporte para listas
  ul: ({ children, ...props }: ListProps) => (
    <Typography
      component="ul"
      sx={{
        mt: 2,
        mb: 2,
        pl: 4,
        '& li': {
          mt: 1,
          mb: 1,
        }
      }}
      {...props}
    >
      {children}
    </Typography>
  ),
  ol: ({ children, ...props }: OrderedListProps) => (
    <Typography
      component="ol"
      sx={{
        mt: 2,
        mb: 2,
        pl: 3,
        listStyleType: 'decimal',
        '& li': {
          display: 'list-item',
          mt: 1,
          mb: 1,
        }
      }}
      {...props}
    >
      {children}
    </Typography>
  ),

  li: ({ children, ...props }: ListItemProps) => (
    <Box
      component="li"
      sx={{
        display: 'list-item',
        mt: 1,
        mb: 1,
        '& > p': {
          m: 0 // Remove margem do parágrafo dentro do li
        }
      }}
      {...props}
    >
      <Typography variant="body1" component="span" sx={{ display: "flex", gap: 1}}>
        <LabelImportant></LabelImportant>
        {children}
      </Typography>
    </Box>
  ),
};