"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, MessageSquare } from "lucide-react";

type Comment = {
  id: number;
  post_slug: string;
  author_name: string;
  comment: string;
  parent_id: number | null;
  created_at: string;
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-CA");
}

function getInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

export default function BlogComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [replyTo, setReplyTo] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/comments?slug=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          name: data.get("name"),
          comment: data.get("comment"),
          parentId: replyTo,
          honeypot: data.get("website"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setReplyTo(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const topLevel = comments.filter((c) => !c.parent_id);
  const replies = (parentId: number) =>
    comments.filter((c) => c.parent_id === parentId);

  return (
    <section className="mt-12">
      <div className="mb-6">
        <span className="text-xs font-mono text-accent tracking-widest uppercase">
          Discussion
        </span>
        <h3 className="text-xl font-heading font-semibold text-text-bright mt-2 flex items-center gap-2">
          <MessageSquare size={20} />
          Comments
          {comments.length > 0 && (
            <span className="text-sm font-mono text-text-muted font-normal">
              ({comments.length})
            </span>
          )}
        </h3>
        <div className="w-12 h-0.5 bg-accent/40 mt-3" />
      </div>

      {/* Comment form */}
      <div className="glass-card p-6 mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute opacity-0 h-0 w-0 overflow-hidden"
            aria-hidden="true"
          />

          {replyTo && (
            <div className="flex items-center gap-2 text-sm text-accent font-mono">
              Replying to comment #{replyTo}
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-text-muted hover:text-accent transition-colors"
              >
                (cancel)
              </button>
            </div>
          )}

          <div className="space-y-1">
            <label
              htmlFor="comment-name"
              className="text-xs font-mono text-text-muted uppercase tracking-wider"
            >
              Name
            </label>
            <input
              id="comment-name"
              type="text"
              name="name"
              required
              maxLength={100}
              placeholder="Your name"
              className="w-full px-3 py-2.5 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="comment-text"
              className="text-xs font-mono text-text-muted uppercase tracking-wider"
            >
              Comment
            </label>
            <textarea
              id="comment-text"
              name="comment"
              required
              maxLength={2000}
              rows={3}
              placeholder="Share your thoughts..."
              className="w-full px-3 py-2.5 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-text-muted font-mono">
              Comments are reviewed before posting.
            </span>
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 py-2 px-5 rounded-lg bg-accent text-accent-on font-semibold font-heading hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {status === "sending" ? (
                <>
                  Posting...
                  <Loader2 size={14} className="animate-spin" />
                </>
              ) : (
                <>
                  Post Comment
                  <Send size={14} />
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-accent font-mono"
              >
                Comment submitted. It will appear after review.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-red-400 font-mono"
              >
                Something went wrong. Try again.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Comments list */}
      {loading ? (
        <div className="text-center py-8 text-text-muted font-mono text-sm">
          Loading comments...
        </div>
      ) : topLevel.length === 0 ? (
        <div className="text-center py-8 text-text-muted font-mono text-sm">
          No comments yet. Be the first.
        </div>
      ) : (
        <div className="space-y-4">
          {topLevel.map((c) => (
            <div key={c.id}>
              <CommentCard comment={c} onReply={() => setReplyTo(c.id)} />
              {replies(c.id).length > 0 && (
                <div className="ml-8 mt-2 space-y-2 border-l-2 border-border pl-4">
                  {replies(c.id).map((r) => (
                    <CommentCard key={r.id} comment={r} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function CommentCard({
  comment,
  onReply,
}: {
  comment: Comment;
  onReply?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-accent-dim text-accent flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">
          {getInitial(comment.author_name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-sm font-semibold text-text-bright">
              {comment.author_name}
            </span>
            <span className="text-xs font-mono text-text-muted">
              {timeAgo(comment.created_at)}
            </span>
          </div>
          <p className="text-sm text-text-primary leading-relaxed">
            {comment.comment}
          </p>
          {onReply && (
            <button
              onClick={onReply}
              className="mt-2 text-xs font-mono text-text-muted hover:text-accent transition-colors"
            >
              Reply
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
