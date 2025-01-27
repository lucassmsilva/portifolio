// types/Post.ts
export interface Post {
  slug: string;
  title: string;
  content: string;
  coverImage: string;
  date: string;
}

// lib/posts.ts
import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await readdir(postsDirectory);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      return await getPost(slug);
    })
  );

  return posts.sort((a: Post, b: Post) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post> {
  try {
    const fullPath = path.join(process.cwd(), "posts", `${slug}.mdx`);
    const fileContents = await readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      coverImage: data.coverImage,
      date: data.date,
    };
  } catch {
    notFound();
  }
}
