import React from "react"
import Link, { type LinkProps } from "next/link"
import { tv, type VariantProps } from "tailwind-variants"

export const buttonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition rounded gap-2 text-sm font-semibold",
  variants: {
    variant: {
      primary:
        "text-blue-950 hover:text-blue-900 hover:bg-blue-50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]",
      secondary:
        "w-full text-white bg-blue-950 p-2 hover:bg-blue-900 text-center transition-colors",
    },
    size: {
      sm: "p-1",
      md: "h-7 p-3",
      lg: "h-10 p-4",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
})

interface ButtonLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps,
    VariantProps<typeof buttonVariants> {
  className?: string
}

export function ButtonLink({
  href,
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({ variant, size, disabled, className })}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Link>
  )
}
