// src/app/api/posts/[slug]/route.ts
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest, context: unknown) {
  // Cast “context” to the shape we expect, so “params” isn’t implicitly any
  const { params } = context as { params: { slug: string } };
  const slug = params.slug;

  const { getPostBySlug } = await import('@/data/posts');
  const post = getPostBySlug(slug);

  if (!post) {
    return new NextResponse('Post not found', { status: 404 });
  }

  return NextResponse.json(post);
}
