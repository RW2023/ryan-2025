// app/components/Button.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    const base = "inline-flex items-center justify-center font-medium transition";
    const variantClass = variant === "outline" ? "btn-outline" : "btn-primary";
    const sizeClass =
        size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

    return (
        <Link href={href} className={`${base} btn ${variantClass} ${sizeClass}`}>
            <span>{label}</span>
            {icon && <ArrowRight className="ml-2 h-4 w-4" />}
        </Link>
    );
}
