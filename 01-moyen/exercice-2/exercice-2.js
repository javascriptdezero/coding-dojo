function exercice2(donneesBrutes) {
  let donneesSplite = donneesBrutes.split(";");
  let donneesSplite2 = donneesSplite[1].split(" ");
  let ville = donneesSplite2[0];
  let jour = donneesSplite2[1];
  let prefixe = donneesBrutes.slice(0,2);
  return prefixe + " : " + ville + " " + jour;
}

let donneesBrutes = `BOR675847583748sjt567654;Bordeaux Vendredi`;
let ex2 = exercice2(donneesBrutes);
console.log(ex2);
// Ne touchez pas à la ligne suivante
module.exports = exercice2;
