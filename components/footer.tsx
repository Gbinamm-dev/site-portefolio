import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-6 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} - Portfolio BUT2 Sciences des Données
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com/Gbinamm-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-slate-400 hover:text-sky-400 transition-colors duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/gabin-ammour-351a662a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-sky-400 transition-colors duration-300" />
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  )
}
