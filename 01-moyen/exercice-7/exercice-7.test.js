const exercice7 = require('./exercice-7');

test("exercice7('ANTHONY', -2) devrait retourner 'YLRFMLW'", () => {
  expect(exercice7('ANTHONY', -2)).toBe('YLRFMLW');
});

test("exercice7('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', -23) devrait retourner 'WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ'", () => {
  expect(exercice7('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', -23)).toBe('WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ');
});

test("exercice7('PROGRAMMING CHALLENGES IS AWESOME', -12) devrait retourner 'DFCUFOAAWBU QVOZZSBUSG WG OKSGCAS'", () => {
  expect(exercice7('PROGRAMMING CHALLENGES IS AWESOME', -12)).toBe('DFCUFOAAWBU QVOZZSBUSG WG OKSGCAS');
});

test("exercice7('JVUNYHABSHAPVUZ', -19) devrait retourner 'QCBUFOHIZOHWCBG'", () => {
  expect(exercice7('JVUNYHABSHAPVUZ', -19)).toBe('QCBUFOHIZOHWCBG');
});

test("exercice7('JAVASCRIPT', -11) devrait retourner 'YPKPHRGXEI'", () => {
  expect(exercice7('JAVASCRIPT', -11)).toBe('YPKPHRGXEI');
});

test("exercice7('HEY', 5) devrait retourner 'MJD'", () => {
  expect(exercice7('HEY', 5)).toBe('MJD');
});

test("exercice7('CODING DOJO', 0) devrait retourner 'CODING DOJO'", () => {
  expect(exercice7('CODING DOJO', 0)).toBe('CODING DOJO');
});