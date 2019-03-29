const seats = document.querySelector('.seats');

function conSeats(arrays) {

    for (let i = 0; i < arrays.length; i++) {
        let array = arrays[i];
        for (let j = 0; j < array.length; j++) {

            if (arrays[i][j] > arrays.length - 1 && arrays[i + 1][j] >= arrays.length - 1) return;

            if (arrays[i][j] < arrays[i + 1][j]) {

                console.log('true');

            } else {
                console.log(arrays[i][j]);
                console.log('false');
                // return false;
            }

        }
    }

}

const arrays = [
    [1, 2, 3, 2, 1, 1],
    [2, 4, 4, 3, 2, 2],
    [5, 5, 5, 5, 4, 4],
    [6, 6, 7, 6, 5, 5],
    [7, 7, 8, 7, 6, 6],
    [8, 8, 9, 8, 7, 7]
];

const arrays2 = [
    [1, 2, 3, 2, 1, 1],
    [2, 4, 4, 3, 6, 2],
    [5, 5, 5, 5, 4, 4],
    [6, 6, 7, 6, 5, 5],
    [7, 7, 8, 7, 6, 6],
    [8, 8, 9, 8, 7, 7]
];

console.log(conSeats(arrays2));