// function findUniq(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }

// function findUniq(arr) {
//   return +arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr.pop() : arr[0]; //if array element at index 0 == index 1 remove last element from array, else return array[0]
}


let array = [8, 1, 1, 1, 1];
console.log(findUniq(array));