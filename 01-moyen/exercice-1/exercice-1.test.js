const exercice1 = require('./exercice-1');

test("pour 'rage' et ['amour', 'code', 'source'] : aucune anagramme", () => {
  expect(exercice1('rage', ['amour', 'code', 'source'])).toEqual([]);
});

test("pour 'rage' et ['amour', 'code', 'source', 'gare'] : 1 anagramme", () => {
  expect(exercice1('rage', ['amour', 'code', 'source', 'gare'])).toEqual(['gare']);
});

test("pour 'rame' et ['bateau', 'amer', 'canards', 'mare'] : 2 anagrammes", () => {
  expect(exercice1('rame', ['bateau', 'amer', 'canards', 'mare'])).toEqual(['amer', 'mare']);
});

test("pour 'argent' et ['gendre', 'ganter', 'gare', 'garent', 'gerant'] : 3 anagrammes", () => {
  expect(exercice1('argent', ['gendre', 'ganter', 'gare', 'garent', 'gerant'])).toEqual(['ganter', 'garent', 'gerant']);
});

test("gestion des majuscules dans le mot, pour 'mArChe' et ['charme', 'courir', 'macher'] : 2 anagrammes (gestion des majuscules)", () => {
  expect(exercice1('mArChe', ['charme', 'courir', 'macher'])).toEqual(['charme', 'macher']);
});

test("gestion des majuscules dans la liste, pour 'marche' et ['chArmE', 'CouRir', 'MacHer'] : 2 anagrammes (gestion des majuscules)", () => {
  expect(exercice1('marche', ['chArmE', 'CouRir', 'MacHer'])).toEqual(['chArmE', 'MacHer']);
});

test("pour 'marche' et ['marche', 'Marche', 'MaRchE'] : aucune anagramme", () => {
  expect(exercice1('marche', ['marche','Marche','MaRchE'])).toEqual([]);
});

test("Les anagrammes doivent utiliser toutes les lettres une seule fois : pour 'tappe' et ['patte'] : aucune anagramme", () => {
  expect(exercice1('tappe', ['patte'])).toEqual([]);
});