function exercice5(cote1, cote2, cote3) {
  if(cote1 === 0 || cote2 === 0 || cote3 === 0){
    return "On peut pas avoir un 0 en coté";
  }
  if(cote1 === cote2 && cote2 === cote3 && cote3 === cote1){
    return "équilatéral";
  }
  if(cote1+cote2<cote3 || cote2+cote3<cote1 || cote3+cote1<cote2){
    return "scalène";
  }
  if(cote1 === cote2 || cote2 === cote3 || cote3 === cote1){
    return "isocèle";
  }
  else{
    return " impossible";
  }
}

let triangleTest = [0,4,6];

let ex5 = exercice5(triangleTest[0],triangleTest[1],triangleTest[2]);

console.log(ex5);
// Ne touchez pas à la ligne suivante
module.exports = exercice5;
