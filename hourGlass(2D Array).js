// Reference: https://stackoverflow.com/questions/652106/finding-neighbours-in-a-two-dimensional-array

function hourGlass(matrix, i, j, k) {
  const directions = [
    [i, j],
    [i, j + 1],
    [i, j + 2],
    [i + 1, j + 1],
    [i + 2, j],
    [i + 2, j + 1],
    [i + 2, j + 2],
  ];
  const [row, col] = directions[k];
  // Check for last rows and columns
  // if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[i].length) {
  //   return null;
  // }
  return matrix[row][col];
}

function run() {
  const matrix = [
    [-9, -9, -9, 1, 1, 1,],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ];

  let result = [];
  // Subtracting 2 from matrix length because a valid hour glass can't be formed with the last 5th and 6th (row and column)
  for (let i = 0; i < matrix.length - 2; i++) {
    for (let j = 0; j < matrix[i].length - 2; j++) {
      let sum = 0;
      // 7 here is the total number of directions in which the current item should grab a value from
      for (let k = 0; k < 7; k++) {
        const res = hourGlass(matrix, i, j, k);
          sum += res;
      }
      console.log('sum', sum)
      result.push(sum);
    }
  }
 
  console.log('res', Math.max(...result));
}

run();