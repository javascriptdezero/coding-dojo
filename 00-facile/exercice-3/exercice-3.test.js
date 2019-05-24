const exercice3 = require('./exercice-3');

test('Zéro étape pour n = 1', () => {
  expect(exercice3(1)).toEqual(0);
});

test('4 étapes pour n = 16', () => {
  expect(exercice3(16)).toEqual(4);
});

test('9 étapes pour n = 12', () => {
  expect(exercice3(12)).toEqual(9);
});

test('152 étapes pour n = 1000000', () => {
  expect(exercice3(1000000)).toEqual(152);
});
