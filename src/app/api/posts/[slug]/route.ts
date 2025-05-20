// app/api/posts/[slug]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const { getPostBySlug } = await import('@/data/posts');
  const post = getPostBySlug(slug);

  if (!post) {
    return new NextResponse('Post not found', { status: 404 });
  }

  return NextResponse.json(post);
}
