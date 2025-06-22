export default function Page1() {
  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">SAE 2.06– Analyse de données, reporting et datavisualisation</h1>

      <section className="mb-8">
        <p>
          Cette SAE s’inscrit pleinement dans le développement des compétences attendues au premier semestre du BUT Science des Données, notamment :
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>Compétence 1 :</strong> Collecter et traiter les données (traiter)</li>
          <li><strong>Compétence 2 :</strong> Analyser statistiquement un jeu de données (analyser)</li>
          <li><strong>Compétence 3:</strong> Interagir avec un client ou un utilisateur (Valoriser)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Figure : Extrait du tableau de bord Power BI</h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/2 bg-black border-4 border-black rounded-xl p-2 shadow-lg">
            <img
              src="/images/Capture d’écran 2025-06-21 184908.png"
              alt="Extrait du tableau de bord Power BI"
              className="w-full rounded-lg"
            />
          </div>
          <p className="md:w-1/2">
            L'expression du besoin du client se trouvait dans la réalisation d'un tableau de Bord Power BI, pour facilité les déplacement dans un entrepôt de NewCold à Rennes.
            Cet extrait illustre bien la structure adoptée pour l’ensemble de nos pages. À gauche, des filtres dynamiques permettent de sélectionner les clients ou le temps de commande.
            Au centre et à droite, des graphiques et indicateurs (volume de commandes, corrélation client/temps, nombre total de commandes) synthétisent les analyses réalisées.
          
          Ce graphique met en évidence chaque compétence en illustrant concrètement leur application. Par exemple, grâce aux filtres dynamiques, on peut explorer les données selon différents paramètres, analyser les tendances temporelles, et visualiser les données avec un graphique circulaire ou encore un boxplot. Ce type d’outil facilite la prise de décision en rendant les données accessibles et compréhensibles.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Liens entre compétences et réalisation</h2>
        <p>
          Durant ce projet, j’ai consolidé ma maîtrise des outils statistiques et informatiques. J’ai notamment approfondi :
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>Power BI</strong>, pour la visualisation et l’interactivité des tableaux de bord</li>
          <li><strong>VBA</strong>, pour le nettoyage des données avant l importation sur Power BI</li>
          
        </ul>
        <p className="mt-4">
          Ces outils m’ont permis de répondre aux besoins concrets du client en produisant un tableau de bord interactif (voir exemple ci-dessous), illustrant notamment le volume de commandes, la répartition temporelle et les corrélations entre variables.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Apports personnels et évolution</h2>
        <p>
          Cette SAE a été pour moi l’occasion d’acquérir une vision globale du processus d’analyse, depuis la compréhension des besoins du client jusqu’à la production d’un outil automatisé et opérationnel.
          Contrairement à d'autres projets plus courts, cette SAE s'étalait sur six mois, nous laissant le temps d'explorer, tester, ajuster, et réellement comprendre la demande du client en profondeur.
        </p>
        <p className="mt-4">
          J’ai également surmonté certaines difficultés personnelles, notamment dans la compréhension des langages de programmation.
          Avant ce projet, je peinais à en percevoir l’utilité. Grâce à cette SAE, j’ai pu en voir les applications concrètes et leur impact sur la résolution de problèmes métier.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Impact sur mon parcours</h2>
        <p>
          Cette SAE a joué un rôle déterminant dans mon orientation en deuxième année.
          En découvrant les possibilités offertes par la visualisation de données et le pilotage via outils décisionnels,
          j’ai choisi de m’orienter vers le parcours <strong>VCOD</strong> (Visualisation, Conception, Organisation des Données),
          même si mes résultats scolaires initiaux étaient mitigés.
        </p>
    
      </section>
    </div>
  );
}
