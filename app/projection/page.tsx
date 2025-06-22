"use client"

import SectionTitle from "@/components/section-title"
import { MotionDiv } from "@/components/motion-provider"
import { Target, BookOpen, Briefcase, X } from "lucide-react"

export default function ProjectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Projection Professionnelle"
        subtitle="Mes objectifs et aspirations pour la suite de mon parcours"
      />

      <div className="max-w-4xl mx-auto">
        {/* Compétences à développer par UE */}
        <MotionDiv
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-4">
            <Target className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Compétences à renforcer en S5/S6</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">UE 1 : Traiter</h4>
                  <p className="text-gray-700 mb-1">
                    Renforcer la capacité à structurer, transformer et manipuler efficacement des données complexes.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Cours : R5.01 (Base de données NoSQL), R6.01 (Big Data : stockage et extraction)<br />
                    SAÉ : S5.02 (Migration de données), S6.02 (SAÉ option)
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">UE 2 : Analyser</h4>
                  <p className="text-gray-700 mb-1">
                    Approfondir l’analyse statistique et l’interprétation de données dans un contexte métier.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Cours : R5.02 (Data Mining), R6.02 (Méthodes statistiques Big Data), R6.03 (Communication entreprise)<br />
                    SAÉ : S5.VCOD3 (Analyse / conception d’un outil décisionnel)
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">UE 3 : Valoriser</h4>
                  <p className="text-gray-700 mb-1">
                    Améliorer ma capacité à présenter des résultats visuellement pertinents via Power BI.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Cours : R5.VCOD07 (Programmation Web pour la visualisation), R6.VCOD05 (Visualisation avancée)<br />
                    Missions alternance : Création et maintenance de tableaux de bord Power BI chez Orange
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">UE 4 : Développer</h4>
                  <p className="text-gray-700 mb-1">
                    Consolider mes compétences en développement d’outils décisionnels personnalisés.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Cours : R5.VCOD06 (Développement logiciel), R6.VCOD01 (Développement d’un outil décisionnel)<br />
                    SAÉ : S6.VCOD01 (Développement & test d’un outil décisionnel)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Objectifs de l'année suivante */}
        <MotionDiv
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <BookOpen className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Objectifs de l'année suivante</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Académiques</h4>
                  <p className="text-gray-700">
                    Rendre possible la compréhension de données complexes et maîtriser les outils nécessaires à l’importation des données.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Professionnels</h4>
                  <p className="text-gray-700">
                    Continuer mon alternance chez Orange, contribuer à des projets Power BI, automatiser des rapports,
                    et assurer la maintenance de dashboards existants.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Personnels</h4>
                  <p className="text-gray-700">
                    Développer un portfolio de dashboards interactifs, participer à des challenges de dataviz (Kaggle,
                    Tableau Public) et améliorer mes compétences en storytelling de données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Intérêt pour l'alternance */}
        <MotionDiv
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <Briefcase className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Mon alternance chez Orange</h3>
              <p className="text-gray-700 mb-6">
                Je poursuis mon alternance chez Orange à partir du 1er septembre, où je participe à la création et la maintenance
                de tableaux de bord Power BI destinés à la prise de décision. Cette expérience m’offre une
                opportunité concrète d’appliquer mes connaissances en visualisation et en gestion de données tout en apprenant de nouveaux outils ainsi que de nouvelles méthodes informatiques.
              </p>

              <h4 className="font-semibold text-gray-800 mb-3">Domaines explorés :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg">
                  <X className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Business Intelligence (Power BI)</span>
                </div>
                <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg">
                  <X className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Automatisation de reporting</span>
                </div>
                <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg">
                  <X className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Suivi de la performance</span>
                </div>
                <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg">
                  <X className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Data visualisation avancée</span>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}
