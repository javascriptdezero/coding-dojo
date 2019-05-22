const exercice2 = require('./exercice-2');

test('retourne "Un pour Tom, un pour moi." quand prénom vaut Tom', () => {
  expect(exercice2("Tom")).toBe("Un pour Tom, un pour moi.");
});

test('retourne "Un pour Alice, un pour moi." quand prénom vaut Alice', () => {
  expect(exercice2("Alice")).toBe("Un pour Alice, un pour moi.");
});

test('retourne "Un pour toi, un pour moi." quand prénom n\'est pas donné', () => {
  expect(exercice2()).toBe("Un pour toi, un pour moi.");
});