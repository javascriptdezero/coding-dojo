const exercice0 = require('./exercice-0');

test('retourne JEVT pour "JavaScript est vraiment top"', () => {
  expect(exercice0("JavaScript est vraiment top")).toEqual("JEVT");
});

test('retourne TUPEM pour "toute une phrase en minuscule"', () => {
  expect(exercice0("toute une phrase en minuscule")).toEqual("TUPEM");
});

test('retourne TPATEEM pour "TU PEUX AUSSI TOUT ECRIRE EN MAJUSCULE"', () => {
  expect(exercice0("TU PEUX AUSSI TOUT ECRIRE EN MAJUSCULE")).toEqual("TPATEEM");
});

test('retourne OPAMLD pour "On PeUT AusSi MixEr LeS DEUx"', () => {
  expect(exercice0("On PeUT AusSi MixEr LeS DEUx")).toEqual("OPAMLD");
});

test('retourne DTJR pour "Dépêche toi j\'ai rendez-vous"', () => {
  expect(exercice0("Dépêche toi j'ai rendez-vous")).toEqual("DTJR");
});

test('retourne LGVFPTC pour "Les "guillemets" vont faire planter ton code"', () => {
  expect(exercice0('Les "guillemets" vont faire planter ton code')).toEqual("LGVFPTC");
});
