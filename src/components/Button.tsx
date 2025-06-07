// ✅ app/components/Button.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

// Update ButtonProps interface to include new variant
interface ButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "success" | "alert" | "ghost";
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
  const base = "btn inline-flex items-center justify-center font-medium";

  const sizeClass =
    size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "btn-md";

  const variantClass =
    variant === "outline"
      ? "btn-outline"
      : variant === "success"
      ? "btn-success"
      : variant === "alert"
      ? "btn-error"
      : variant === "ghost"
      ? "btn-ghost"
      : "btn-primary";

  return (
    <Link href={href} className={twMerge(base, variantClass, sizeClass)}>
      <span>{label}</span>
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </Link>
  );
}
