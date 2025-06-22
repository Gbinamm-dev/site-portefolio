export default function Page1() {
  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">SAÉ-201 - Conception et implémentation d’une base de données</h1>

      <section className="mb-8">
        <p>
          Cette SAE s’inscrit pleinement dans le développement des compétences attendues au deuxième semestre du BUT Science des Données :
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>Compétence 1 :</strong> Collecter et traiter les données (traiter)</li>
          <li><strong>Compétence 2 :</strong> Analyser statistiquement un jeu de données (analyser)</li>
          <li><strong>Compétence 3:</strong> Interagir avec un client ou un utilisateur (Valoriser)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Figure : Extrait de la Table Access </h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/2 bg-black border-4 border-black rounded-xl p-2 shadow-lg">
            <img
              src="/images/Image1"
              alt="Extrait du tableau de bord Power BI"
              className="w-full rounded-lg"
            />
          </div>
          <p className="md:w-1/2">
            L'expression du besoin du client se trouvait dans la réalisation de plusieurs tables de données sur Access. Le jeu de donnée était fictif.
            L’objectif de cette SAE était la création d’une base de données relationnelle, en prenant soin d’effectuer chacune des parties de la création d’une base de données, soit : de modéliser, d’implémenter, d’alimenter, de valider et de documenter la base de données. Pour cette SAE il y a plusieurs livrables attendus avec globalement les archives et le portefolio à rendre.
            J’ai dû durant cette SAE, faire toutes la parties implémentation des données, c’est-à-dire que j’ai dû réaliser le looping avec Noah legrain (nous nous étions partagés le travail en 2 équipes de 2 étudiants) puis exporter le looping en txt pour pouvoir l’exporter sur Acces. Après l’exportations sur Acces j’ai dû régler quelques paramètres pour que les requêtes puissent fonctionner correctement, changer le type de données de chaque champs, décimal en real par exemple.
          </p> 
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Liens entre compétences et réalisation</h2>
        <p>
          Durant ce projet, j’ai consolidé ma maîtrise des compétences de developpement informatiques. J’ai notamment approfondi :
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>SQL</strong>, pour la importation des données sur Access</li>
          <li><strong>Access</strong>, pour la compréhension des tables crées</li>
           <li><strong>Looping</strong>, pour la modélisation des données</li>

        </ul>

      </section>

 <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-2">Apports personnels et évolution</h2>
  <p>
    Cette SAE m’a permis de comprendre en profondeur le processus de création d’une base de données, et de prendre conscience du temps et de la rigueur que cela exige.
    Depuis mon expérience avec DBeaver lors du premier semestre, je souhaitais comprendre comment une base était construite afin de pouvoir réutiliser cette compétence dans d’autres projets à l’IUT.
    Comprendre la structure des données s’est révélé essentiel pour pouvoir les traiter efficacement : face à des données mal structurées, je me rendais désormais compte des problèmes et je savais comment adapter leur format pour les exploiter correctement.
  </p>
  <p className="mt-4">
    La SAE a été assez intense, et sans un travail commencé suffisamment tôt, il aurait été difficile de respecter les délais de rendu.
    Cependant, j’ai senti une réelle progression dans mes compétences au fil du temps, ce qui m’a aidé à combler certaines lacunes.
    Grâce aux connaissances acquises pendant cette SAE, j’ai pu avancer plus rapidement sur certaines tâches, repérer plus facilement les erreurs et les corriger de manière plus efficace.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Impact sur mon parcours</h2>
  <p>
    Cette SAE a eu un impact important sur mon parcours en renforçant mon intérêt pour les bases de données et les outils décisionnels.
    J’ai pu identifier mes difficultés techniques, notamment en ce qui concerne l’organisation de mon travail et la structuration de mon code.
    Je me suis également informé sur des langages comme le VBA, dans lesquels j’avais des lacunes.
    En envisageant de poursuivre le parcours <strong>VCOD</strong> (Visualisation, Conception, Organisation des Données) en deuxième année, cette SAE m’a permis de mieux cerner les compétences à renforcer pour réussir dans cette voie.
  </p>
</section>


    </div>
  );
}
