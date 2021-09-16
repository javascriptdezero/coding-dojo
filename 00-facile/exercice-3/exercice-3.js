function exercice3(n) {
  let compteur = 0;
  while(n!==1){
    console.log(n);
    if(nombreEstPair(n)){
      n /= 2;
    }
    else {
      n = (n * 3) + 1;
    }
    compteur ++;
  }
  console.log("Nombre d'étapes : " + compteur);
  return n;
}

function nombreEstPair(nombre) {
  // On verra l'opérateur modulo '%' dans le module intermédiaire !
  return nombre % 2 === 0;
}

let nombre = 12;
let ex3 = exercice3(nombre);
// Ne touchez pas à la ligne suivante
module.exports = exercice3;
