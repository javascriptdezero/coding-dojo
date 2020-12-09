const exercice5 = require("./exercice-5");

test("Résultat attendu = 31", () => {
    expect(exercice5([1, 2, 3, 4, 10, 11])).toEqual(31);
});

test("Résultat attendu = 5789", () => {
    expect(
        exercice5([338, 65, 713, 595, 428, 610, 728, 573, 871, 868])
    ).toEqual(5789);
});

test("Résultat attendu = 20966", () => {
    expect(
        exercice5([
            456,
            124,
            752,
            746,
            782,
            492,
            741,
            171,
            752,
            295,
            2,
            56,
            725,
            961,
            135,
            654,
            697,
            328,
            112,
            992,
            922,
            816,
            519,
            997,
            751,
            268,
            378,
            276,
            209,
            842,
            805,
            348,
            587,
            105,
            61,
            449,
            590,
            616,
            442,
            347,
            665,
        ])
    ).toEqual(20966);
});
