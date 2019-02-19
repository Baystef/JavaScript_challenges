// const arrayToObj = arr => {
//     if (arr.length === 0) {
//         alert('Invalid Array');
//         throw new Error('Invalid Array');
//     }
//     console.log(arr);
//     let output = arr.forEach((el, i) => {
//         return {
//             index: i,
//             value: el
//         };
//     })

//     return output;
//     //console.log(output);
 

// }

const arrayToObj = arr => {
    if (arr.length === 0) {
        alert('Invalid Array');
        throw new Error('Invalid Array');
    }

    const str = arr.filter(a => typeof a === 'string')
    const num = arr.filter(a => typeof a === 'number')

    return {
        String: str,
        Number: num
    };

}


let array = ['bee', 6, 'better', 5, 'bayo', 4, 'beast', 3, 'ba', 8, 'b'];
console.log(arrayToObj(array));