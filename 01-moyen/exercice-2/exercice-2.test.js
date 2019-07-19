const exercice2 = require('./exercice-2');

test('BOR675847583748sjt567654;Bordeaux Vendredi', () => {
  expect(exercice2('BOR675847583748sjt567654;Bordeaux Vendredi')).toBe('BOR : Bordeaux Vendredi');
});

test('TOU576746573fhdg4737dh4;Toulouse Mardi', () => {
  expect(exercice2('TOU576746573fhdg4737dh4;Toulouse Mardi')).toBe('TOU : Toulouse Mardi');
});

test('BEL4f65hf75f736463;Belfort Jeudi', () => {
  expect(exercice2('BEL4f65hf75f736463;Belfort Jeudi')).toBe('BEL : Belfort Jeudi');
});