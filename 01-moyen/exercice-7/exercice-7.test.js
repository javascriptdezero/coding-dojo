const exercice7 = require('./exercice-7');

test("exercice7('ANTHONY', -2) devrait retourner 'YLRFMLW'", () => {
  expect(exercice7('ANTHONY', -2)).toBe('YLRFMLW');
});

test("exercice7('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', -23) devrait retourner 'QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD'", () => {
  expect(exercice7('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', -23)).toBe('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD');
});

test("exercice7('PROGRAMMING CHALLENGES IS AWESOME', -12) devrait retourner 'BDASDMYYUZS OTMXXQZSQE UE MIQEAYQ'", () => {
  expect(exercice7('PROGRAMMING CHALLENGES IS AWESOME', 12)).toBe('BDASDMYYUZS OTMXXQZSQE UE MIQEAYQ');
});

test("exercice7('JVUNYHABSHAPVUZ', -19) devrait retourner 'QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD'", () => {
  expect(exercice7('JVUNYHABSHAPVUZ', -19)).toBe('CONGRATULATIONS');
});

test("exercice7('JAVASCRIPT', -11) devrait retourner 'ULGLDNCTAE'", () => {
  expect(exercice7('JAVASCRIPT', -11)).toBe('ULGLDNCTAE');
});

test("exercice7('HEY', 5) devrait retourner 'MJD'", () => {
  expect(exercice7('HEY', 5)).toBe('MJD');
});