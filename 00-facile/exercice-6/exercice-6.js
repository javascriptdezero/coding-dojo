function exercice6() {
    let chaine = '1';
    for (let i = 2; i <= 200; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            chaine += " - FizzBuzz";
        } else if (i % 3 === 0) {
            chaine += " - Fizz";
        } else if (i % 5 === 0) {
            chaine += " - Buzz";
        } else {
            chaine += " - " + i;
        }
    }
    return chaine;
}


// Ne touchez pas à la ligne suivante
module.exports = exercice6;