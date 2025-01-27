// app/blog/page.tsx
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { getAllPosts } from "@/lib/posts";
import PostCard from "./components/post-card";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <Container maxWidth="lg" disableGutters>
      <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
        Blog
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid key={post.slug} size={{ xs: 12, sm: 6, md: 4 }}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
