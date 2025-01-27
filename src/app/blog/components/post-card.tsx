'use client';

import { Post } from '@/lib/posts';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';

export default function PostCard({ post }: { post: Post }) {
 return (
   <Card 
     component={Link}
     href={`/posts/${post.slug}`}
     sx={{ 
       height: '100%',
       textDecoration: 'none',
       display: 'block'
     }}
   >
     {post.coverImage && (
       <CardMedia
         component="img"
         height="200"
         image={post.coverImage}
         alt={post.title}
       />
     )}
     <CardContent>
       <Typography variant="h5" gutterBottom>
         {post.title}
       </Typography>
       <Typography variant="subtitle2" color="text.secondary">
         {new Date(post.date).toLocaleDateString()}
       </Typography>
     </CardContent>
   </Card>
 );
}