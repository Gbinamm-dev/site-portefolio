"use client"

export default function Header() {
  return (
    <header className="relative">
      {/* Navigation discrète en haut à droite */}
      <nav className="absolute top-6 right-8 z-20 flex gap-6">
        {[
          { href: "/", label: "Accueil" },
          { href: "/sae", label: "SAE" },
          { href: "/stage", label: "Stage" },
          { href: "/projection", label: "Projection" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }, index) => (
          <a
            key={index}
            href={href}
            className="text-slate-300 text-base font-medium relative group hover:text-white transition"
          >
            {label}
            <span
              className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"
            />
          </a>
        ))}
      </nav>
    </header>
  )
}

