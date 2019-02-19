// const toWeirdCase = (str) => {
//     let arr = str.split(' ');
//     return arr.map(word => {
//         return word.split('').map((t, index) => {
//             if (index % 2 === 0) return t.toUpperCase();
//             else return t.toLowerCase();
//         }).join('');
//     }).join(' ');
// }

// const toWeirdCase = (str) => {
//     return str.split(' ').map(word => {
//         return word.split('').map((t, index) => {
//             return index % 2 === 0 ? t.toUpperCase() : t.toLowerCase();
//         }).join('');
//     }).join(' ');
// }

const toWeirdCase = (str) => {
    let res = [];
    let index = 0;

    for (let i = 0; i < str.length; i++) {
        res.push(index % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase());
        index++;
        str[i] === ' ' ? index = 0 : 0;
    }
    return res.join('');
}

console.log(toWeirdCase('This is a test'));