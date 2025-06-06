// data/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory where MDX blog posts are stored
const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      frontMatter: data,
    };
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: data,
    content,
  };
}

export const allPosts = getAllPosts();