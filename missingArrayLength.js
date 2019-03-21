function getLengthOfMissingArray(arrayOfArrays) {
    // if (arrayOfArrays = [] ||  null) return 0;
    // let length = arrayOfArrays.length;

    // for (let i = 0; i <= length; i++) {
    //     if (arrayOfArrays[i] = [] || null) return 0;
    // }

    let sorted = arrayOfArrays.sort((a, b) => (a.length - b.length));
    // console.log(sorted);
    let missing = sorted.forEach((a, b) => {
        if ((b.length - a.length) > 1) console.log(a.length);
    })
    // let missing = sorted.forEach((n, i) => {
    //     if (n[i + 1].length - n[i].length === 2)
    //      console.log(n[i].length);
    // });

   

    return missing;
}

const arrays = [[1,2], [3,4,5,1], [2,5,3,7,8],[1]];
console.log(getLengthOfMissingArray(arrays));