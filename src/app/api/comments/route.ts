import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.NEON_CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
});

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "slug required" }, { status: 400 });
  }

  const { rows } = await pool.query(
    `SELECT id, post_slug, author_name, comment, parent_id, created_at
     FROM blog_comments
     WHERE post_slug = $1 AND approved = true
     ORDER BY created_at ASC`,
    [slug]
  );

  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { slug, name, comment, parentId, honeypot } = body;

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!slug || !name?.trim() || !comment?.trim()) {
    return NextResponse.json(
      { error: "slug, name, and comment are required" },
      { status: 400 }
    );
  }

  if (name.trim().length > 100 || comment.trim().length > 2000) {
    return NextResponse.json(
      { error: "name max 100 chars, comment max 2000 chars" },
      { status: 400 }
    );
  }

  const { rows } = await pool.query(
    `INSERT INTO blog_comments (post_slug, author_name, comment, parent_id)
     VALUES ($1, $2, $3, $4)
     RETURNING id, post_slug, author_name, comment, parent_id, created_at`,
    [slug, name.trim(), comment.trim(), parentId || null]
  );

  return NextResponse.json(rows[0], { status: 201 });
}
