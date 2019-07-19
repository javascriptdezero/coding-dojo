# Exercice 2

Une centrale téléphonique a besoin d'une application permettant le traitement de données brutes provenant de ces relais aux 4 coins du pays.

Ces données brutes ressemblent à ceci : `BOR675847583748sjt567654;Bordeaux Vendredi`.

L'application devra extraire certaines informations contenues dans ce texte puis les formater.

Elle devra extraire :
- Le préfixe de la ville (toujours les 3 premières lettres) `PPP`
- Le nom de la ville `<ville>`
- Le jour de la semaine `<jour>`

Ces données devront être formatées ainsi :

`PPP : <ville> <jour>`

Créez une fonction qui recevra en entrée une ligne de données brutes et retournera les données formatées correctement.

## Exemples
- Pour `BOR675847583748sjt567654;Bordeaux Vendredi`, ça doit renvoyer `BOR : Bordeaux Vendredi`
- Pour `TOU576746573fhdg4737dh4;Toulouse Mardi`, ça doit renvoyer `TOU : Toulouse Mardi`