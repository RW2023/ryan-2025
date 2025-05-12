// app/components/ListMotion.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

type ListMotionProps = {
    children: React.ReactNode;
    className?: string;
};

export function ListMotion({ children, className = "" }: ListMotionProps) {
    return (
        <AnimatePresence>
            <motion.div
                className={className}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={containerVariants}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

type ItemMotionProps = {
    children: React.ReactNode;
};

export function ItemMotion({ children }: ItemMotionProps) {
    return (
        <motion.div variants={itemVariants} transition={{ duration: 0.3 }}>
            {children}
        </motion.div>
    );
}
