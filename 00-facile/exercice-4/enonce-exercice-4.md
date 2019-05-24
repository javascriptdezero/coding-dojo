# Exercice 4

> Cet exercice n'est pas *si* simple, mais vous pouvez réussir à le faire en utilisant tout ce qu'on a vu dans le module débutant. Bon courage !

L'objectif de cet exercice est de créer une fonction qui traduit un nombre en chiffres Romains.

Par exemple pour `nombre = 12`, la fonction doit renvoyer `XII`.

> On utilisera les lettres `i`, `v`, `x`, `l`, `c`, `d`, `m` en majuscule pour construire les chiffres Romains.

Voici les règles de construction d'un chiffre Romain :
- Les nombres `1`, `2` et `3` s'écrivent respectivement `I`, `II` et `III`
- Le nombre `5` s'écrit `V`
- Le nombre `10` s'écrit `X`
- Le nombre `50` s'écrit `L`
- Le nombre `100` s'écrit `C`
- Le nombre `500` s'écrit `D`
- Le nombre `1000` s'écrit `M`
- Lorsqu'on écrit un nombre inférieur après un nombre supérieur, cela indique une addition. Par exemple le nombre `6` s'écrit `VI`. On fait l'addition `V` (5) + `I` (1) = 6.
- Lorsqu'on écrit un nombre inférieur juste avant un nombre supérieur, cela indique une soustraction. Par exemple le nombre `4` s'écrit `IV`. On fait la soustraction `V` (5) - `I` (1) = 4.
- Par conséquent, les dix premiers nombres s'écrivent `I`, `II`, `III`, `IV`, `V`, `VI`, `VII`, `VIII`, `IX`, `X`
- On peut associer autant de symboles qu'on veut pour écrire de plus grands nombres, par exemple :
  - `36` s'écrit `XXXVI`
  - `42` s'écrit `XLII`
  - `2448` s'écrit `MMCDXLVIII`.

## Exemples
- `1` => `I` 
- `2` => `II` 
- `3` => `III` 
- `4` => `IV` 
- `5` => `V` 
- `6` => `VI` 
- `9` => `IX` 
- `27` => `XXVII` 
- `48` => `XLVIII` 
- `59` => `LIX` 
- `93` => `XCIII` 
- `141` => `CXLI` 
- `163` => `CLXIII` 
- `163` => `CCCLXIX` 
- `402` => `CDII` 
- `575` => `DLXXV` 
- `911` => `CMXI` 
- `1024` => `MXXIV` 
- `2751` => `MMDCCLI` 
- `3000` => `MMM` 