function exercice1(mot, liste) {
  let tableauMot = mot.split("");
  let anagramme = [];
  tableauMot.sort();
  for(let i = 0; i < liste.length; i ++){
    let tableauMotListe = liste[i].split("");
    tableauMotListe.sort();
    if(JSON.stringify(tableauMot)===JSON.stringify(tableauMotListe)){
      anagramme.push(liste[i]);
    }
  }
  return anagramme;
}

let mot = `rage`;
let tableau = ['amour','haine','gare'];
let ex1 = exercice1(mot, tableau);
console.log(ex1);
// Ne touchez pas à la ligne suivante
module.exports = exercice1;
