function deleteNth(arr, n) {
    let result = {};
    return arr.filter(number => {
        result[number] = result[number] ? result[number] + 1 : 1;
        return result[number] <= n;
    })
       
}

let array = [1, 2, 3, 4, 5, 6, 7, 4, 4, 6, 1, 1, 1];
console.log(deleteNth(array, 2));


// function occurence(arr) {
//     let result = {};
//     for (let item in arr) {
//         if (result[arr[item]] == undefined) {
//             result[arr[item]] = 0;
//         }
//         result[arr[item]]++;
//     }
//     return result;
// }
