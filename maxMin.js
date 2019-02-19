 function maxMin(str) {
     let res = str.split(' ').map(x => Number(x));
     return `${Math.max(...res)}  ${Math.min(...res)}`;
 }

 let numStrings = ("1 2 6 8 7 3 9 300 20 25 -20 -30 56 78");
 console.log(maxMin(numStrings));

 