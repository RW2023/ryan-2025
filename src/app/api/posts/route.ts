// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { allPosts } from '@/data/posts';

export async function GET() {
  return NextResponse.json(allPosts);
}
