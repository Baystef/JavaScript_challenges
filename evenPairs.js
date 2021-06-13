// sample input
"3gy41d216" - true
"f09r27i8e67" - false

function EvenPairs(str) { 
  let count;

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i] % 2)) {
      count = 0;
    } else if (str[i] % 2  === 0) {
      count += 1;
    }

    if (count === 2) return true;
  }
   return false;
}