const exercice3 = require('./exercice-3');

test("Tous les nombres à un chiffre sont des nombres d'Armstrong", () => {
  expect(exercice3(5)).toBe(true);
});

test("Il n'y a pas de nombres à 2 chiffres qui soient des nombres d'Armstrong", () => {
  expect(exercice3(10)).toBe(false);
});

test("153 est un nombre d'Armstrong", () => {
  expect(exercice3(153)).toBe(true);
});

test("100 n'est pas un nombre d'Armstrong", () => {
  expect(exercice3(100)).toBe(false);
});

test("9474 est un nombre d'Armstrong", () => {
  expect(exercice3(9474)).toBe(true);
});

test("9475 n'est pas un nombre d'Armstrong", () => {
  expect(exercice3(9475)).toBe(false);
});

test("9926315 est un nombre d'Armstrong", () => {
  expect(exercice3(9926315)).toBe(true);
});

test("9926314 n'est pas un nombre d'Armstrong", () => {
  expect(exercice3(9926314)).toBe(false);
});