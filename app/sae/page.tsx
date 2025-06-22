"use client";

import SectionTitle from "@/components/section-title";
import Card from "@/components/card";
import { MotionDiv } from "@/components/motion-provider";
import Link from "next/link";
import { Description } from "@radix-ui/react-toast";

export default function SAEPage() {
  const saeData = [
    {
      title: "SAE 2.06 - Analyse de données, reporting et datavisualisation",
      description: "Durée : 6 mois",
      skills: ["Traiter", "Analyser","Valoriser"],
      tools: ["Power BI", "VBA"],
      category: "pro",
      link: "/sae/page"  
    },
    {
      title: "SAÉ-201 - Conception et implémentation d’une base de données",
      description: "Durée : 1 mois",
      skills: ["Développer"],
      tools: ["SQL", "Access", "Looping"],
      category: "pro",
      link: "/projection/page"
    },
    {
      title: "SAÉ 4-02 - Reporting d'une analyse multivariée",
      description: "Durée : 1 mois",
      skills: ["Traiter", "Analyser","Valoriser"],
      tools: ["R Studio",],
      category: "pro",
      link: "/contact/page"  
    },
    {
      title: "Création d'un Bot discord",
      description: "Robot pour la sécurisation d'un serveur personnel hebergé en local",
      tools: ["javascript", "php"],
      category: "perso"
    },
    {
      title: "Création d'un site web ",
      tools: ["Javascript", "Typescript", "React","CSS","Nextjs"],
      description: "Site web sur des test de personnalités",
      category: "perso"
    },


  ];

  const proProjects = saeData.filter(sae => sae.category === "pro").slice(0, 4);
  const persoProjects = saeData.filter(sae => sae.category === "perso").slice(0, 4);

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 -z-10 bg-contain bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/photos-premium/architecte-architectes-discutant-table-blueprint_1418-1605.jpg')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/90" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <SectionTitle 
          title="Situations d'Apprentissage et d'Évaluation (SAE)" 
          subtitle="Découvrez les projets réalisés durant ma formation en BUT Sciences des Données"
        />

        {/* Projets Pro */}
        <MotionDiv
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-2xl font-bold mb-4 border-b-2 border-white pb-2">
            Projets Professionnels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proProjects.map((sae, index) => {
              const cardContent = (
                <Card
                  key={index}
                  title={sae.title}
                  description={sae.description}
                  skills={sae.skills}
                  tools={sae.tools}
                />
              );

              return sae.link ? (
                <Link key={index} href={sae.link}>
                  {cardContent}
                </Link>
              ) : (
                <div key={index}>{cardContent}</div>
              );
            })}
          </div>
        </MotionDiv>

        {/* Projets Perso */}
        <MotionDiv
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-2xl font-bold mb-4 border-b-2 border-white pb-2">
            Projets Personnels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {persoProjects.map((sae, index) => (
              <Card
                key={index}
                title={sae.title}
                description={sae.description}
                skills={sae.skills}
                tools={sae.tools}
              />
            ))}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
