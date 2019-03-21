function mySort(nums) {
    let re = /[A-Za-z]/i;
    let int1 = nums.filter(n => !re.test(String(n)));
  
    let int2 = int1.map(n => n >>> 0);
   
    let odd = int2.filter(n => n % 2 === 1).sort((a, b) => a - b);
    let even = int2.filter(n => n % 2 === 0).sort((a, b) => a - b);
    
    return [...odd, ...even];
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'bye', 100.5, 33.5];
let array2 = [90, 45, 66, 100.5, 33.5];

console.log(mySort(array));