"use client"

import Image from "next/image"
import SectionTitle from "@/components/section-title"
import { MotionDiv } from "@/components/motion-provider"

export default function StagePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle title="Mon Stage" subtitle="Découvrez mon expérience professionnelle en entreprise" />

      <div className="max-w-4xl mx-auto">
        {/* Présentation de l'entreprise */}
        <MotionDiv
          className="bg-white text-gray-900 rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold border-l-4 border-orange-500 pl-3">L'entreprise : Orange France</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/2048px-Orange_logo.svg.png"
                    alt="Logo de l'entreprise"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="mb-4">
                  Orange France est le leader dans le domaine des réseaux de téléphonie fixe et mobile. J’ai réalisé
                  mon stage au sein de l’UCI Ouest, une unité dédiée au pilotage des interventions des techniciens,
                  notamment sur la fibre (FTTH, FTTE, FTTO).
                </p>
                <p>
                  Le développement d’outils BI permet d’optimiser la planification, de réduire l’impact environnemental,
                  et de mieux suivre les performances terrain.
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Missions réalisées */}
        <MotionDiv
          className="bg-white text-gray-900 rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-semibold border-l-4 border-orange-500 pl-3 mb-4">Missions réalisées</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Création d’un tableau de bord Power BI pour suivre les kilomètres parcourus par les techniciens</li>
              <li>Développement d’un système d’alertes pour suivre les tickets Océane non clôturés</li>
              <li>Actualisation et historisation des points de mutualisation via Looker Studio et Power BI</li>
              <li>Optimisation de la performance des rapports à l’aide de DAX et SQL</li>
              <li>Analyse des besoins utilisateurs, modélisation de données avec GoogleCloud BigQuery et Power BI</li>
            </ul>
          </div>
        </MotionDiv>

        {/* Outils utilisés */}
        <MotionDiv
          className="bg-white text-gray-900 rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-semibold border-l-4 border-orange-500 pl-3 mb-4">Outils utilisés</h3>
            <div className="flex flex-wrap gap-3">
              {["Power BI", "Looker Studio", "Google Cloud Platform (GCP)", "SQL", "DAX"].map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm border border-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </MotionDiv>

        {/* Compétences du PN acquises */}
        <MotionDiv
          className="bg-white text-gray-900 rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-semibold border-l-4 border-orange-500 pl-3 mb-4">Compétences du PN acquises</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Analyser",
                  text:
                    "Étude des données de déplacement des techniciens, pour dégager des tendances et Réduire l'empreinte carbone",
                },
                {
                  title: "Valoriser",
                  text:
                    "Création de tableaux de bord interactifs sous Power BI et Looker Studio pour faciliter les prises de décision.",
                },
                {
                  title: "Traiter",
                  text:
                    "Manipulation de données avec SQL, nettoyage, modélisation et optimisation des requêtes. ",
                },
                {
                  title: "Développer",
                  text:
                    "Conception d’un composant décisionnel Power BI, avec l'utilisation du langage dynamique DAX",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>

      
      </div>
    </div>
  )
}
