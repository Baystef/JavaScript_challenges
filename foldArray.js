const findMiddle = (a, b, i) => {
    if (a[i] !== b[i]) return findMiddle(a, b, i + 1);

    return a[i];
}

function foldArray(array, runs) {
    if (runs === 0) return array;
     const length = array.length;
    const folded = [];

    for (let i = 0; i < Math.ceil(length / 2); i++) {
      
        folded[i] = length - i - 1 === i ? array[i] : array[i] + array[length - 1 - i];
    }

    return foldArray(folded, runs - 1);
}

let arr = [1, 2, 3, 4, 5];
console.log(foldArray(arr, 1))