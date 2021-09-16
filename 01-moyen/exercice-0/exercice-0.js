function exercice0(phrase) {
  let texteSplit = phrase.split(" ");
  let acronyme = phrase[0][0] != '"' ? phrase[0][0] : phrase[0][1];
  for(let i = 1; i < texteSplit.length ; i ++){
    let wordSplit = texteSplit[i].split("");
    if(wordSplit[0] == '"') {
      acronyme += wordSplit[1];
    }
    else{
      acronyme += wordSplit[0];
    }
  }
  return acronyme.toUpperCase();
}

let phrase = 'Les "guillemets" vont faire planter ton code';

let ex0 = exercice0(phrase);
console.log(ex0);
// Ne touchez pas à la ligne suivante
module.exports = exercice0;
