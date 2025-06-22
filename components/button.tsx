"use client"

import type React from "react"

import Link from "next/link"
import { MotionDiv } from "./motion-provider"

interface ButtonProps {
  href: string
  variant?: "primary" | "secondary" | "outline"
  children: React.ReactNode
  className?: string
  download?: boolean
}

export default function Button({ href, variant = "primary", children, className = "", download = false }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none"

  const variantClasses = {
    primary: "bg-sky-500 text-white hover:bg-sky-600 shadow-md hover:shadow-lg shadow-sky-500/20",
    secondary: "bg-violet-600 text-white hover:bg-violet-700 shadow-md hover:shadow-lg shadow-violet-500/20",
    outline: "border-2 border-sky-500 text-sky-400 hover:bg-sky-950/50",
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  }

  return (
    <MotionDiv initial="initial" whileHover="hover" whileTap="tap" variants={buttonVariants}>
      <Link href={href} className={buttonClasses} download={download}>
        {children}
      </Link>
    </MotionDiv>
  )
}
