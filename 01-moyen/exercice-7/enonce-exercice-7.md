# Exercice 7

En cryptographie, le **chiffrement par décalage**, également connu sous le nom de **chiffre de César** est l'une des techniques de cryptage les plus simples et les plus connues. C'est un type de chiffrement de substitution dans lequel chaque lettre du texte brut est remplacée par une lettre à un nombre fixe de positions dans l'alphabet. Par exemple, avec un décalage à gauche de 3, D serait remplacé par A, E deviendrait B, et ainsi de suite. La méthode porte le nom de Jules César, qui l'a utilisée dans sa correspondance privée.

## Exemple de l'alphabet avec une rotation par 3

```text
Alphabet original   : ABCDEFGHIJKLMNOPQRSTUVWXYZ
Alphabet décalé +3  : DEFGHIJKLMNOPQRSTUVWXYZABC
```

Créez une fonction qui renverra la phrase après avoir décalé l'alphabet.

La fonction prendra les paramètres suivants :

- `phrase`: une chaîne de caractère (tout en majuscule) sans espaces
- `decalage`: un entier, le décalage dans l'alphabet

## Exemples

- `exercice7('JAVASCRIPT', 15)`, la fonction retournera `'ULGLDNCTAE'`

Vous pouvez voir d'autres exemples dans le fichier des tests : `exercice-7.test.js`.
