// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function shuffle(s) {
  var arr = s.split('');           // Convert String to array
  var n = arr.length;              // Length of the array

  for (var i = 0; i < n - 1; ++i) {
    var j = getRandomInt(n);
    console.log(i, j)     // Get random of [0, n-1]

    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }

  s = arr.join('');                // Convert Array to string
  return s;                         // Return shuffled string
}

// function permutations(string) {
//   return shuffle(string)
// }

function factorial(n) {
  if (n < 2) {
    return n
  }
  return n * factorial(n - 1)
}

// function checkForUnique(str) {
//   var hashtable = {};
//   var arr = str.split('');
//   for (var i = 0, len = arr.length; i < len; i++) {
//     if (hashtable[str[i]] != null) {
//       console.log(hashtable[str[i]]);
//       hashtable[str[i]] += 1;
//     }
//     else {
//       hashtable[str[i]] = 1;
//     }
//   }
//   return hashtable;
// }



// console.log(checkForUnique('aaaabbbbb'))
console.log(factorial(2))
// console.log(permutations('aabb'))
