"use client"

import Image from "next/image"
import Button from "@/components/button"
import { MotionDiv } from "@/components/motion-provider"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen">
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
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.datasciencedegreeprograms.net/wp-content/uploads/2021/08/shutterstock_1058815598-1024x659.jpg')",
        }}
      />

      {/* VOILE NOIR */}
      <div className="absolute inset-0 -z-10 bg-black/90" />

      {/* CONTENU */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <MotionDiv
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Photo de profil */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 shadow-xl shadow-sky-500/20">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Photo de profil"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Informations personnelles */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-white mb-2">Gabin Ammour</h1>
            <h2 className="text-2xl italic text-white mb-2">
              Étudiant en BUT Sciences des Données
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-200">Parcours</h3>
              <p className="text-slate-300">
                Actuellement en deuxième année de BUT Sciences des Données à
                l'IUT de Vannes. Passionné par l'analyse de données et la
                visualisation, je développe mes compétences en statistiques,
                programmation et intelligence artificielle.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-200">Compétences clés</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Traiter ",
                  "Analyser",
                  "Valoriser",
                  "Développer"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-sky-900/50 text-sky-300 text-sm px-3 py-1 rounded-full border border-sky-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-200">
              Langages informatiques
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "DAX",
                  "Langage R",
                  "Javascript",
                  "VBA",
                  "HTML",
                  "CSS",
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="bg-slate-700 text-slate-300 text-sm px-3 py-1 rounded-full border border-slate-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* outils avec images et infobulles */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-200">Logiciels et Outils</h3>
              <div className="flex flex-wrap gap-4">
                {[  
                  {
                    name: "Power BI",
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png",
                    title: "Power BI",
                  },  
                  {
                    name: "Excel",
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/1200px-Microsoft_Excel_2013-2019_logo.svg.png",
                    title: "Excel",
                  },
                  {
                    name: "RStudio",
                    url: "https://framalibre.org/images/logo/Rstudio.png",
                    title: "RStudio : IDE pour R, orienté statistiques",
                  },
                  {
                    name: "Power BI",
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png",
                    title: "Power BI",
                  },
                  {
                    name: "Access",
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/2097px-Microsoft_Office_Access_%282019-present%29.svg.png",
                    title: "Access",
                  },
                  {
                    name: "Oracle",
                    url: "https://logo-marque.com/wp-content/uploads/2020/09/Oracle-Logo.png",
                    title: "Oracle",
                  },
                  {
                    name: "Mysql",
                    url: "https://images.icon-icons.com/2415/PNG/512/mysql_plain_wordmark_logo_icon_146415.png",
                    title: "Mysql",
                  },
                     {
                    name: "Oracle SQL Developper",
                    url: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/68/Oracle_SQL_Developer_logo.svg/1200px-Oracle_SQL_Developer_logo.svg.png",
                    title: "Oracle SQL Developper",
                  },
                     {
                    name: "Microsoft SQL Developper",
                    url: "https://brandlogos.net/wp-content/uploads/2025/03/microsoft_sql_server-logo_brandlogos.net_wykhq.png",
                    title: "Microsoft SQL Developper",
                  },
                       {
                    name: "Talend",
                    url: "https://systemsdigest.com/sites/default/files/logos/talend-thumb2.png",
                    title: "Talend",
                  },
                       {
                    name: "Google Cloud Plateform",
                    url: "https://static-00.iconduck.com/assets.00/google-cloud-icon-1024x823-wiwlyizc.png",
                    title: "Google Cloud Plateform",
                  },
                           {
                    name: "Looker Studio",
                    url: "https://brandlogos.net/wp-content/uploads/2025/04/looker_studio-logo_brandlogos.net_b61td.png",
                    title: "Looker Studio",
                  }
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="relative group w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-lg shadow-sm hover:scale-110 transition-transform duration-200 ease-in-out"
                    title={tool.title}
                  >
                    <Image
                      src={tool.url}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="object-contain w-8 h-8"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/sae" variant="primary">
                Voir mes projets <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="/contact" variant="outline">
                Me contacter
              </Button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}
