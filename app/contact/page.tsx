"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import SectionTitle from "@/components/section-title"
import Button from "@/components/button"
import { MotionDiv } from "@/components/motion-provider"
import { Github, Linkedin, FileText } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const now = new Date().toLocaleString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    if (!form.current) return

    const hiddenInput = form.current.querySelector('input[name="temps"]') as HTMLInputElement
    if (hiddenInput) {
      hiddenInput.value = now
    }

    emailjs
      .sendForm(
        "service_ls7e7dj",
        "template_raxb7p8",
        form.current,
        "FevtUrDDkUClqtOdM"
      )
      .then(() => {
        setStatus("success")
        form.current?.reset()
      })
      .catch(() => {
        setStatus("error")
      })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Contact"
        subtitle="N'hésitez pas à me contacter pour discuter de projets ou d'opportunités"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Réseaux sociaux */}
          <MotionDiv
            className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Réseaux sociaux</h3>
            <div className="flex flex-col space-y-4">
              <Link href="https://github.com" className="flex items-center gap-3 text-slate-300 hover:text-sky-400">
                <Github className="h-5 w-5" />
                github.com/votre-username
              </Link>
              <Link
                href="https://www.linkedin.com/in/gabin-ammour-351a662a3/"
                className="flex items-center gap-3 text-slate-300 hover:text-sky-400"
              >
                <Linkedin className="h-5 w-5" />
                linkedin.com/in/gabin-ammour
              </Link>
            </div>

            <div className="mt-8">
              <Button href="/cv.pdf" variant="primary" download className="w-full justify-center">
                <FileText className="mr-2 h-5 w-5" />
                Télécharger mon CV (PDF)
              </Button>
            </div>
          </MotionDiv>

          {/* Formulaire de contact */}
          <MotionDiv
            className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Envoyez-moi un message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input type="hidden" name="temps" value="" />

              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-slate-300 mb-1">Nom</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Veuillez entrer une adresse email valide"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                  placeholder="votre.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-1">Sujet</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                  placeholder="Votre message (max 1000 caractères)"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition-colors"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>

            <p className="text-sm text-slate-400 mt-4">
              {status === "success" && "✅ Message envoyé avec succès !"}
              {status === "error" && "❌ Une erreur est survenue. Veuillez réessayer."}
              {status === "idle" &&
                "Je vous répondrai dans les plus brefs délais. Vous pouvez également me contacter directement."}
            </p>
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}
