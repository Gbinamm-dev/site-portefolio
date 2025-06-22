"use client"

import { MotionDiv } from "./motion-provider"

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <MotionDiv
      className="mb-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      {subtitle && <p className="text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
    </MotionDiv>
  )
}
