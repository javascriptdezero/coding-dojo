function exercice4(convertTab) {
  let solution = [];
  for(let i = 0; i < convertTab.length; i ++){
    solution.push(nombreRomain[i]);
  }
  return solution;
}

let nombreRomain = {
  I : 1,
  II : 2,
  III : 3,
  V : 5,
  X : 10,
  L : 50,
  C : 100,
  D : 500,
  M : 1000
};

let num = 15;

let convertTab = String(num).split("");

let ex4 = exercice4(convertTab);

console.log(ex4);


// Ne touchez pas à la ligne suivante
module.exports = exercice4;
