function exercice6() {
  let texte = 0;
  for(let i = 1; i <= 200; i ++){
    if(i % 15 === 0){
      texte += "FizzBuzz";
    }
    else if(i % 5 === 0){
      texte += "Buzz";
    }
    else if(i % 3 === 0){
      texte += "Fizz";
    }
    else{
      texte += i;
    }
    texte += " - ";
  }

  return texte;
}

let ex6 = exercice6();
console.log(ex6);

// Ne touchez pas à la ligne suivante
module.exports = exercice6;
