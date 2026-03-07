"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "success" | "alert" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const variantStyles = {
  primary:
    "bg-accent text-accent-on hover:shadow-lg hover:shadow-accent/20",
  outline:
    "border border-border text-text-primary hover:border-accent/40 hover:text-accent",
  success:
    "bg-emerald-600 text-white hover:bg-emerald-700",
  alert:
    "bg-red-600 text-white hover:bg-red-700",
  ghost:
    "text-text-muted hover:text-accent hover:bg-surface-light",
};

export default function Button({
  href,
  label,
  variant = "primary",
  size = "md",
  icon = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        "inline-flex items-center justify-center font-medium font-heading rounded-lg transition-all duration-200",
        sizeStyles[size],
        variantStyles[variant]
      )}
    >
      <span>{label}</span>
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </Link>
  );
}
