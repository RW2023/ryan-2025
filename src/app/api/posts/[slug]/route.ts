// app/api/posts/[slug]/route.ts
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const { getPostBySlug } = await import('@/data/posts');
  const post = getPostBySlug(slug);

  if (!post) {
    return new NextResponse('Post not found', { status: 404 });
  }

  return NextResponse.json(post);
}
