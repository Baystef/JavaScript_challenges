// Sort by length algorithm
// const sortIt = array => {
//     return array.sort((a, b) => (b.length - a.length));
// }
// let playersName = ['ronlsdinho', 'pepe', 'ronlado', 'ba', 'tayo']
// console.log(sortIt(playersName));

 let playersName = ['ronlsdinho', 'pepe', 'ronlado', 'ba', 'tayo'];
 let sorted = playersName.sort((a, b) => (b.length - a.length));

 for (let element of sorted)
     console.log(element);