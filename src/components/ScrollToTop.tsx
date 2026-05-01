"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Floating scroll-to-top button. Appears once the user has scrolled past the
 * threshold (default 600px), pinned to the lower-right of the viewport with
 * safe-area insets. Smooth-scrolls to top on click.
 */
export default function ScrollToTop({
  threshold = 600,
}: {
  threshold?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed z-50 right-5 bottom-5 md:right-8 md:bottom-8 w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent hover:text-text-bright hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-200"
          style={{
            paddingBottom: "env(safe-area-inset-bottom, 0)",
          }}
        >
          <ArrowUp size={20} strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
