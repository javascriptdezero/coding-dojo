const exercice1 = require('./exercice-1');

test('retourne zéro quand chiffre vaut 0', () => {
  expect(exercice1(0)).toBe("zéro");
});

test('retourne un quand chiffre vaut 1', () => {
  expect(exercice1(1)).toBe("un");
});

test('retourne deux quand chiffre vaut 2', () => {
  expect(exercice1(2)).toBe("deux");
});