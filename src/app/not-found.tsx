'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-base-100 text-base-content">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-bold text-error mb-4"
            >
                404
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-base-content/80 mb-6 max-w-md"
            >
                Oops! The page you&apos;re looking for doesn&apos;t exist, has been moved, or likely Ryan has not created it yet.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 flex-wrap justify-center"
            >
                <Link href="/" className="btn btn-outline flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                </Link>
                <Link href="#" onClick={() => window.history.back()} className="btn btn-outline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Go Back
                </Link>
            </motion.div>
        </section>
    );
}
