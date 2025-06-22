"use client"

import { MotionDiv } from "./motion-provider"
// import Image from "next/image"  // plus nécessaire puisque pas d'image

interface CardProps {
  title: string
  description: string
  skills?: string[]
  tools?: string[]
  // imageSrc?: string  // optionnel, plus utile ici
  className?: string
}

export default function Card({
  title,
  description,
  skills = [],
  tools = [],
  className = "",
}: CardProps) {
  return (
    <MotionDiv
      className={`bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Suppression du bloc image */}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>

        {skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Compétences ciblées</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-sky-900/50 text-sky-300 text-xs px-2 py-1 rounded border border-sky-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {tools.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Outils utilisés</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </MotionDiv>
  )
}
