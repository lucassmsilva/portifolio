// components/post-content.tsx
'use client';
import { Post } from '@/lib/posts';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '@/components/mdx-components';

export interface CompiledPost extends Omit<Post, 'content'> {
  content: Array<{
    type: string;
    key: null;
    props: {
      children: React.ReactNode;
    };
  } | string>;
  formattedDate: string;
}


export default function PostContent({ post }:  { post: CompiledPost }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid size={12}>
          {post.coverImage && (
            <Box
              component="img"
              src={post.coverImage}
              alt={post.title}
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 2,
                mb: 4
              }}
            />
          )}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end"}}>
          <Typography variant="subtitle1" color="white" gutterBottom>
            {post.formattedDate}
          </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
          <MDXProvider components={mdxComponents}>
              {post.content?.length > 0 && post?.content?.map((element, index) => {
                if (typeof element === 'string') return null;
                const Component = mdxComponents[element.type as keyof typeof mdxComponents];
                if (!Component) return null;
                return <Component key={index} {...element.props} />;
              })}
            </MDXProvider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}