const exercice5 = require('./exercice-5');

test('(2, 2, 2) est un triangle équilatéral', () => {
  expect(exercice5(2, 2, 2)).toEqual('équilatéral');
});

test('(10, 10, 10) est un triangle équilatéral', () => {
  expect(exercice5(10, 10, 10)).toEqual('équilatéral');
});

test('(3, 4, 4) est un triangle isocèle', () => {
  expect(exercice5(3, 4, 4)).toEqual('isocèle');
});

test('(4, 3, 4) est un triangle isocèle', () => {
  expect(exercice5(4, 3, 4)).toEqual('isocèle');
});

test('(4, 4, 3) est un triangle isocèle', () => {
  expect(exercice5(4, 4, 3)).toEqual('isocèle');
});

test('(10, 10, 2) est un triangle isocèle', () => {
  expect(exercice5(10, 10, 2)).toEqual('isocèle');
});

test('(3, 4, 5) est un triangle scalène', () => {
  expect(exercice5(3, 4, 5)).toEqual('scalène');
});

test('(10, 11, 12) est un triangle scalène', () => {
  expect(exercice5(10, 11, 12)).toEqual('scalène');
});

test('(5, 4, 2) est un triangle scalène', () => {
  expect(exercice5(5, 4, 2)).toEqual('scalène');
});

test("(1, 1, 3) n'est pas un triangle, c'est impossible !", () => {
  expect(exercice5(1, 1, 3)).toEqual('impossible');
});

test("(7, 3, 2) n'est pas un triangle, c'est impossible !", () => {
  expect(exercice5(7, 3, 2)).toEqual('impossible');
});

test("(10, 1, 3) n'est pas un triangle, c'est impossible !", () => {
  expect(exercice5(10, 1, 3)).toEqual('impossible');
});