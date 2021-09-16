function exercice3(nombre) {
  let nombreSplite = String(nombre).split("");
  let sum = 0;
  for(let i = 0; i < nombreSplite.length; i++){
    sum += nombreSplite[i]**nombreSplite.length;
  }
  if(sum === nombre){
    console.log("C'est un nombre d'Amstrong");
    return true;
  }
  else{
    console.log("C'est pas un nombre d'Amstrong");
    return false;
  }

}

let nombre = 9;
let ex3 = exercice3(nombre);

// Ne touchez pas à la ligne suivante
module.exports = exercice3;
