export default function Page1() {
  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">SAÉ 4-02 - Reporting d'une analyse multivariée</h1>

      <section className="mb-8">
        <p>
          Cette SAE s’inscrit pleinement dans le développement des compétences attendues au quatrième semestre du BUT Science des Données :
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>Compétence 1 :</strong> Collecter et traiter les données (traiter)</li>
          <li><strong>Compétence 2 :</strong> Analyser statistiquement un jeu de données (analyser)</li>
          <li><strong>Compétence 3:</strong> Interagir avec un client ou un utilisateur (Valoriser)</li>
          <li><strong>Compétence 3:</strong> Developper des outils décisionnels</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
  Lien :{" "}
  <a
    href="https://gabinammour.shinyapps.io/Bilan_criminalite_USA/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    https://gabinammour.shinyapps.io/Bilan_criminalite_USA/
  </a>
</h3>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          
        
         
          <p className="md:w-1/2">
           Pendant la SAÉ 4-02, j’ai conçu et programmé un outil de reporting automatisé pour restituer les résultats d’une analyse exploratoire multivariée. J’ai travaillé à partir d’une problématique métier et d’un entrepôt de données, appliquant des méthodes statistiques descriptives et des techniques de data mining, comme les méthodes factorielles et la classification non supervisée. Ce projet m’a permis de comprendre l’importance du reporting dans le processus décisionnel, en valorisant les données et en facilitant la prise de décision grâce à une présentation claire et argumentée des résultats.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Liens entre compétences et réalisation</h2>
        <p>
          Durant ce projet, j’ai consolidé ma maîtrise des outils  informatiques. J’ai notamment approfondi :
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>R</strong>, pour la réalisation des tableaux, graphiques et calculs ainsi que pour le texte</li>


        </ul>

      </section>

<section className="mb-8">
  <h2 className="text-2xl font-semibold mb-2">Apports personnels et évolution</h2>
  <p>
    Cette SAÉ m’a permis d’approfondir mes connaissances en analyse exploratoire multivariée, notamment à travers la mise en pratique de méthodes statistiques comme l’ACP (analyse en composantes principales).
    J’ai appris à manipuler des données réelles en utilisant des outils statistiques et des librairies R pour effectuer des analyses factorielles et classifier les données.
    Par ailleurs, j’ai pu développer des compétences en conception d’interfaces utilisateur (UI/UX) adaptées au reporting des résultats, ce qui m’a aidé à mieux comprendre comment présenter efficacement les données pour faciliter la prise de décision.
  </p>
  <p className="mt-4">
    Le projet était exigeant et nécessitait une organisation rigoureuse pour automatiser la restitution des analyses.
    J’ai progressé dans la maîtrise des méthodes statistiques et dans la programmation, ce qui m’a permis de corriger plus rapidement les erreurs et d’améliorer la qualité du reporting.
    Cette expérience m’a également sensibilisé à l’importance de lier analyse statistique et restitution visuelle dans un contexte métier.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Impact sur mon parcours</h2>
  <p>
    Cette SAÉ a renforcé mon intérêt pour la data science et les outils décisionnels, en particulier pour les méthodes statistiques avancées et leur application concrète dans l’analyse de données métiers.
    J’ai compris l’importance de choisir des méthodes adaptées aux besoins spécifiques des entreprises et d’automatiser la restitution pour gagner en efficacité.
    Ces acquis me motivent à poursuivre dans le parcours <strong>VCOD</strong> (Visualisation, Conception, Organisation des Données), où je souhaite approfondir mes compétences en statistique, en programmation et en design de reporting.
  </p>
</section>



    </div>
  );
}