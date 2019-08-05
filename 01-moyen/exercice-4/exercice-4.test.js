const exercice4 = require('./exercice-4');

test('Position (-9,9). La fléchette atterrit en dehors de la cible: 0 points', () => {
  const x = -9;
  const y = 9;
  const expected = 0;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (0,10). La fléchette atterrit pile à la limite du cercle extérieur: 1 point', () => {
  const x = 0;
  const y = 10;
  const expected = 1;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (4,4). La fléchette atterrit dans le cercle extérieur: 1 point', () => {
  const x = 4;
  const y = 4;
  const expected = 1;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (5,0). La fléchette atterrit à la limite du cercle du milieu : 5 points', () => {
  const x = 5;
  const y = 0;
  const expected = 5;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (0.8,-0.8). La fléchette atterrit dans le cercle du milieu : 5 points', () => {
  const x = 0.8;
  const y = -0.8;
  const expected = 5;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (0,-1). La fléchette atterrit à la limite du cercle intérieur : 10 points', () => {
  const x = 0;
  const y = -1;
  const expected = 10;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (-0.1,-0.1). La fléchette atterrit dans le cercle intérieur : 10 points', () => {
  const x = -0.1;
  const y = -0.1;
  const expected = 10;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (0.4,0.8). La fléchette atterrit dans le cercle intérieur : 10 points', () => {
  const x = 0.4;
  const y = 0.8;
  const expected = 10;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (2,4). La fléchette atterrit dans le cercle du milieu : 5 points', () => {
  const x = 2;
  const y = 4;
  const expected = 5;
  expect(exercice4(x, y)).toEqual(expected);
});

test('Position (4,8). La fléchette atterrit dans le cercle extérieur : 1 point', () => {
  const x = 4;
  const y = 8;
  const expected = 1;
  expect(exercice4(x, y)).toEqual(expected);
});
