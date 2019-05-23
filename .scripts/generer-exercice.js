const path = require('path');
const fs = require('fs');

// Si le script est renommé ou change de dossier, on récupère les infos dynamiquement
const [ , cheminAbsoluDuScript, lettreNiveauDifficulte] = process.argv;
const cheminRelatifDuScript = cheminAbsoluDuScript.replace(process.cwd() + path.sep, "");

// On définit les niveaux de difficulté possibles
const niveauxDifficulte = {
  f: {
    nom: "facile",
    nomRepertoire: "00-facile",
  },
  m: {
    nom: "moyen",
    nomRepertoire: "01-moyen",
  },
  d: {
    nom: "difficile",
    nomRepertoire: "02-difficile",
  },
  e: {
    nom: "expert",
    nomRepertoire: "03-expert",
  },
}

// On vérifie qu'il y a bien un niveau de difficulté correct indiqué, sinon on affiche l'aide
const niveauDifficulteChoisi = niveauxDifficulte[lettreNiveauDifficulte];
if (process.argv.length !== 3 || niveauDifficulteChoisi === undefined) {
  console.log(
`Merci d'indiquer le niveau de difficulté d'un exercice par une lettre :
f = facile, m = moyen, d = difficile, e = expert

Utilisation : node ${cheminRelatifDuScript} f|m|d|e

Exemple d'ajout d'un exercice de niveau moyen :
node ${cheminRelatifDuScript} m`);
  process.exit(1);
}

console.log(`Ajout d'un exercice de niveau ${niveauDifficulteChoisi.nom}...`);

const dossierNiveauDifficulte = chercherDossierNiveauDifficulte(cheminAbsoluDuScript, niveauDifficulteChoisi);
if (dossierNiveauDifficulte === null) {
  console.log(`Impossible de trouver le dossier ${niveauDifficulteChoisi.nomRepertoire}`);
  process.exit(1);
}

const numeroExercice = calculerNumeroProchainExercice(dossierNiveauDifficulte);
const dossierPourNouvelExercice = creerDossierNouvelExercice(dossierNiveauDifficulte, numeroExercice);
console.log(`Répertoire du nouvel exercice créé : ${dossierPourNouvelExercice}`);
creerFichiersNouvelExercice(dossierPourNouvelExercice, numeroExercice);

console.log("Terminé :) !");
console.log("Il ne reste plus qu'à remplir ces fichiers... Merci !");

/*
On recherche le dossier du niveau de difficulté choisi pour y ajouter l'exercice.
Limitation : la recherche s'effectue à partir du dossier contenant ce script et en
remontant dans l'arborescence.
*/
function chercherDossierNiveauDifficulte(cheminAbsolu, niveauDifficulte) {
  let repertoireCourant = path.dirname(cheminAbsolu);

  do {
    let nomTheoriqueDossierDifficulte = path.join(repertoireCourant, niveauDifficulte.nomRepertoire);
    try {
      const infoSurChemin = fs.statSync(nomTheoriqueDossierDifficulte);
      // On teste qu'on est bien sur un dossier (car ça pourrait être un fichier du même nom !)
      if (infoSurChemin.isDirectory()) {
        // On a trouvé le bon dossier !
        return nomTheoriqueDossierDifficulte;
      }
    } catch (e) {
      // Le fichier n'existe pas, on remonte au dossier parent
      repertoireCourant = path.dirname(repertoireCourant);
    }
  } while (repertoireCourant !== path.sep || repertoireCourant.length === 0);
  
  // Si on arrive ici, c'est qu'on n'a pas trouvé le dossier !
  return null;
}

function calculerNumeroProchainExercice(dossier) {
  const listeFichiers = fs.readdirSync(dossier);
  let listeDossiersExercices = listeFichiers.filter(nomFichier => {
    if (nomFichier.startsWith('exercice-')) {
      const infoSurFichier = fs.statSync(path.join(dossier, nomFichier));
      // On teste qu'on est bien sur un dossier (car ça pourrait être un fichier du même nom !)
      return infoSurFichier.isDirectory();
    }
    return false;
  });

  // S'il n'y a aucun dossier exercice-<nombre> c'est qu'on doit créer le tout premier
  if (listeDossiersExercices.length === 0) {
    return 0;
  }
  
  // On récupère les nombres de tous les dossiers
  listeNumeros = listeDossiersExercices.reduce(function(acc, nomRepertoire) {
    const dernierePartieDuNom = nomRepertoire.split('-').pop();
    // On vérifie que c'est bien un nombre, car on pourrait avoir un dossier exercice-test par exemple !
    const nombre = parseInt(dernierePartieDuNom);
    if (!isNaN(nombre)) {
      acc.push(nombre);
    }
    return acc;
  }, []);

  return Math.max(...listeNumeros) + 1;
}

function creerDossierNouvelExercice(dossierNiveauDifficulte, numeroExercice) {
  const cheminAbsoluDossierNouvelExercice = path.join(dossierNiveauDifficulte, `exercice-${numeroExercice}`);
  fs.mkdirSync(cheminAbsoluDossierNouvelExercice);
  return cheminAbsoluDossierNouvelExercice;
}

function creerFichiersNouvelExercice(cheminAbsoluDossierNouvelExercice, numeroExercice) {
  // On copie les modèles de fichier avec les bons noms et le bon contenu
  const nomFichierEnonce = `enonce-exercice-${numeroExercice}.md`;
  const nomFichierJavaScript = `exercice-${numeroExercice}.js`;
  const nomFichierTest = `exercice-${numeroExercice}.test.js`;

  const contenuEnonce = `# Exercice ${numeroExercice}



## Exemples
- `;

  const contenuFichierJavaScript = `function exercice${numeroExercice}() {
  
}

// Ne touchez pas à la ligne suivante
module.exports = exercice${numeroExercice};`;

  const contenuFichierTest = `const exercice${numeroExercice} = require('./exercice-${numeroExercice}');

test('', () => {
  expect(exercice${numeroExercice}()).toBe();
});`;

  // Création des fichiers d'exercices avec leur contenu
  console.log(`Génération du fichier ${nomFichierEnonce}...`);
  fs.writeFileSync(path.join(cheminAbsoluDossierNouvelExercice, nomFichierEnonce), contenuEnonce);
  console.log(`Génération du fichier ${nomFichierJavaScript}...`);
  fs.writeFileSync(path.join(cheminAbsoluDossierNouvelExercice, nomFichierJavaScript), contenuFichierJavaScript);
  console.log(`Génération du fichier ${nomFichierTest}...`);
  fs.writeFileSync(path.join(cheminAbsoluDossierNouvelExercice, nomFichierTest), contenuFichierTest);
}
