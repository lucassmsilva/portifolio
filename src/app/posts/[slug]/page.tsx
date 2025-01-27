// app/posts/[slug]/page.tsx
import { Metadata } from 'next';
import { getPost, getAllPosts } from '@/lib/posts';
import PostContent from './post-content';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';


export async function generateMetadata(
 { params }: { params: { slug: string }}
): Promise<Metadata> {
 const { slug } = await params;
 try {
   const post = await getPost(slug);
   return { title: post.title };
 } catch {
   return { title: 'Post Not Found' };
 }
}

export async function generateStaticParams() {
 const posts = await getAllPosts();
 return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: { params: { slug: string }}) {
 const { slug } = await params;
 try {
   const post = await getPost(slug);
   const { content } = await compileMDX({ source: post.content });
   const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
     year: 'numeric',
     month: 'long',
     day: 'numeric'
   });

   return <PostContent post={{ ...post, content, formattedDate }} />;
 } catch {
   notFound();
 }
}