const exercice6 = require("./exercice-6");

test("Pour les bougies [3, 2, 1, 3], il y a 2 grandes bougies", () => {
    expect(exercice6([3, 2, 1, 3])).toEqual(2);
});

test("Pour les bougies [3, 3, 3], il y a 3 grandes bougies", () => {
    expect(exercice6([3, 3, 3])).toEqual(3);
});

test("Pour les bougies [4, 5, 8, 7, 4, 8, 6, 3, 8, 1, 8], il y a 4 grandes bougies", () => {
    expect(exercice6([4, 5, 8, 7, 4, 8, 6, 3, 8, 1, 8])).toEqual(4);
});

test("Pour les bougies [4, 5, 10, 7, 4, 10, 6, 3, 10, 1, 10, 9, 1, 2, 3, 10, 10, 4, 3, 1, 2, 10], il y a 7 grandes bougies", () => {
    expect(
        exercice6([
            4,
            5,
            10,
            7,
            4,
            10,
            6,
            3,
            10,
            1,
            10,
            9,
            1,
            2,
            3,
            10,
            10,
            4,
            3,
            1,
            2,
            10,
        ])
    ).toEqual(7);
});
