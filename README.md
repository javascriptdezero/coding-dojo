# Comment installer et utiliser le Coding Dojo ?

J'explique tout dans [cette vidéo](https://www.youtube.com/watch?v=jcNYk3pq098).

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

N'hésitez pas à contribuer et à m'envoyer vos exercices/sites préférés par email ou via [Twitter](https://twitter.com/JeremyMouzin), ou carrément via une Pull Request sur GitHub, je les intégrerai avec plaisir 👌.

J'ai rédigé un script qui génère automatiquement les fichiers de base pour ajouter un nouvel exercice facilement !

Pour afficher la documentation du script, depuis la racine du dépôt, dans une console, tapez :

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

Exemple d'ajout d'un nouvel exercice de niveau facile (lettre f) :
```
$ node .scripts/generer-exercice.js f

Ajout d'un exercice de niveau facile...
Génération du fichier enonce-exercice-3.md...
Génération du fichier exercice-3.js...
Génération du fichier exercice-3.test.js...
Terminé :) !
Il ne reste plus qu'à remplir ces fichiers... Merci !
```