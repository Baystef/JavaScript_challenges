function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0;

    let length = arrayOfArrays.length;

    for (let j = 0; j < length; j++) {
        if (arrayOfArrays[j] === null || arrayOfArrays[j].length === 0) return 0;
    }

    let missing = arrayOfArrays.sort((a, b) => (a.length - b.length)).reduce((a, b) => (b.length - a.length) > 1 ? a : b);
    console.log(missing);

    // let missing = sorted.reduce((a, b) => b.length - a.length > 1 ? a : b);

    return missing.length + 1;

}

const arrays = [
    [1, 2],
    [3, 4, 5, 1],
    [2, 5, 3, 7, 8],
    [1]
];
const arrays2 = [
    [],
    [1, 2, 3]
];
const arrays3 = [
    [1, 2, 3],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6, 7]
];

const array4 = [
    [null],
    [1, 2, 3]
];

console.log(getLengthOfMissingArray(array4));