// ✅ app/components/Button.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    href: string;
    label: string;
    variant?: "primary" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: boolean;
}

export default function Button({
    href,
    label,
    variant = "primary",
    size = "md",
    icon = false,
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-medium transition rounded-md shadow-sm";

    const sizeClass =
        size === "sm"
            ? "text-sm px-3 py-1.5"
            : size === "lg"
                ? "text-lg px-5 py-2.5"
                : "text-base px-4 py-2";

    const variantClass =
        variant === "outline"
            ? "border border-[var(--foreground-muted)] text-[var(--foreground)] hover:bg-[var(--foreground-muted)]/10"
            : "bg-[var(--accent-color)] text-white hover:brightness-110";

    return (
        <Link href={href} className={twMerge(base, variantClass, sizeClass)}>
            <span>{label}</span>
            {icon && <ArrowRight className="ml-2 h-4 w-4" />}
        </Link>
    );
}
