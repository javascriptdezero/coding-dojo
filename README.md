# Comment installer et utiliser le Coding Dojo ?

J'explique tout dans [cette vidéo](https://www.youtube.com/watch?v=jcNYk3pq098&list=PLyj4q0fkISxAPhSShp5dlNSYNAKXGDiPd).

# Objectifs du Coding Dojo

Le Coding Dojo va vous permettre de :

- Travailler votre algorithmique
- Vous préparer à un entretien technique
- Maîtriser les différentes syntaxes du langage
- Tester différentes variantes de votre code pour répondre à un exercice donné
- Vous entraîner à développer en pur JavaScript
- Travailler dans un environnement proprice au remaniement de code (refactoring) grâce aux tests unitaires qui vous indiqueront si votre nouveau code répond toujours aux spécifications de l'énoncé

# Niveau des exercices

Les exercices sont classés par mes soins dans 4 niveaux de difficulté : facile, moyen, difficile, expert.

Les exercices à l'intérieur d'un niveau de difficulté ne sont pas du tout classés. Ça veut dire que l'exercice 3 peut être plus difficile que l'exercice 12 et vice versa.

> N'hésitez donc pas à lire tous les énoncés pour trouver un exercice qui colle à vos capacités actuelles !

# Sources des exercices

La plupart des exercices disponibles dans ce Coding Dojo sont la traduction d'exercices en anglais déjà existants. Certains exercices sont également complètement inventés.

Les sites anglais utilisés comme source d'exercices sont les suivants :
- [exercism.io](https://exercism.io/)
- [codingdojo.org](http://codingdojo.org/kata/)

# Contributions

## Envoyez-moi vos exercices favoris

N'hésitez pas à contribuer en m'envoyant vos exercices/sites préférés par email ou via [Twitter](https://twitter.com/JeremyMouzin), je les intégrerai avec plaisir 👌.

## Faites une Pull Request

Encore mieux : vous pouvez créer vous-même les exercices et me demander de fusionner ceux-ci avec le Coding Dojo via une Pull Request, directement depuis GitHub.

Pour ça, suivez les étapes ci-dessous.

> Cette façon de faire peut être complexe pour un débutant, n'hésitez pas à me demander de l'aide sur le Slack de la formation ou via Twitter !

### Étape 1 : Faites un fork de ce dépôt

Lisez la documentation de GitHub pour [faire un fork](https://help.github.com/en/articles/fork-a-repo). Utilisez la traduction automatique dans Chrome pour traduire la documentation en français.

Une fois que c'est fait, ouvrez Visual Studio Code, puis clonez votre dépôt sur votre ordinateur : comme ce qu'on fait dans la vidéo d'installation du Coding Dojo, mais cette fois-ci avec l'URL de *votre* dépôt (le fork que vous venez de faire).

### Étape 2 : Générer les fichiers de base d'un exercice

J'ai créé un script qui génère automatiquement le dossier et les fichiers de base pour ajouter un nouvel exercice en indiquant uniquement le niveau de difficulté de celui-ci.

Pour afficher la documentation de ce script, depuis la racine du dépôt dans une console, tapez :

```
$ node .scripts/generer-exercice.js 
```

Voici la documentation :

```
Merci d'indiquer le niveau de difficulté d'un exercice par une lettre :
f = facile, m = moyen, d = difficile, e = expert

Utilisation : node .scripts/generer-exercice.js f|m|d|e

Exemple d'ajout d'un exercice de niveau moyen :
node .scripts/generer-exercice.js m
```

Supposons que vous souhaitez ajouter un exercice de niveau **facile**. Vous devrez taper (n'oubliez pas le `f` à la fin de la ligne de commande) :

```
$ node .scripts/generer-exercice.js f

Ajout d'un exercice de niveau facile...
Génération du fichier enonce-exercice-3.md...
Génération du fichier exercice-3.js...
Génération du fichier exercice-3.test.js...
Terminé :) !
Il ne reste plus qu'à remplir ces fichiers... Merci !
```

Une fois les fichiers générés, il suffit de modifier leur contenu avec votre exercice.

Pour continuer sur l'exemple précédent :

- `enonce-exercice-3.md` : rédigez l'énoncé de l'exercice avec quelques exemples simples à comprendre
- `exercice-3.js` : ajoutez les paramètres nécessaires dans la déclaration de la fonction si besoin
- `exercice-3.test.js` : ajoutez les différents tests. Voir la documentation de Jest, le framework de tests : [quick start guide](https://jestjs.io/docs/en/getting-started.html) et [comment écrire des tests](https://jestjs.io/docs/en/expect). Utilisez la traduction automatique dans Chrome pour traduire la documentation de Jest en français.

Une fois que c'est fait, commitez votre travail depuis VSCode et faites une Pull Request.

### Étape 3 : Faire une Pull Request

Lisez le guide GitHub sur [comment faire une Pull Request depuis un fork](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork). Utilisez la traduction automatique dans Chrome pour traduire la documentation en français.

# ❤️ Vous aimez le Coding Dojo ?

Aidez-moi à le faire connaître [en partageant ce tweet](https://twitter.com/intent/tweet?text=D%C3%A9couvrez%20l%27excellent%20%28et%20gratuit%20%21%29%20Coding%20Dojo%20de%20la%20formation%20JavaScript%20de%20Z%C3%A9ro%20et%20entra%C3%AEnez-vous%20%C3%A0%20d%C3%A9velopper%20en%20JavaScript%20avec%20des%20exercices%20en%20Fran%C3%A7ais%20directement%20depuis%20VSCode.&url=https%3A%2F%2Fgithub.com%2Fjavascriptdezero%2Fcoding-dojo&via=JeremyMouzin&related=JeremyMouzin&hashtags=JavaScript,CodingDojo).
Beaucoup de temps et d'investissement ont été consacrés à son élaboration.

N'hésitez pas à mettre une étoile sur GitHub aussi, ça fait toujours plaisir ! (bouton "Star" en haut à droite).

Merci de votre soutien 😘.