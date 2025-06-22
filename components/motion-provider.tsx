"use client"

import type React from "react"

import { motion } from "framer-motion"

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const MotionDiv = motion.div
