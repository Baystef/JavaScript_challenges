// function descendingOrder(n) {
//     let arrayNum = n.toString().split('');
//     let sorted = arrayNum.sort((a, b) => b - a);

//     let res = sorted.join('');
//     return parseInt(res);
// }



// let number = 645732184754;
// console.log(descendingOrder(number));

// function descendingOrder(n) {
//     return parseInt(String(n).split('').sort().reverse().join(''));
// }



// function digital_root(n) {
//     return n
//         .toString()
//         .split('')
//         .map(x => parseInt(x), 10).reduce((a, b) => a + b, 0);
// }

// console.log(digital_root(108));


// Generator function
// function *createIterator() {
//     yield 1;
//     return 10;
//     yield 2;
//     yield 3;
// } 

// let iterator = createIterator()

// console.log(iterator.next());
// console.log(iterator.next());


//ARRAY REMOVE METHOD - John Resig (MIT Licensed)
// Array.prototype.remove = function(from, to) {
//     let rest = this.slice((to || from) + 1 || this.length);
//     this.length = from < 0 ? this.length + from  : from;
//     return this.push.apply(this, rest);
// };


// ARRAY INSERT METHOD
// Array.prototype.insert = function (index, item) {
//     this.splice(index, 0, item);
// };
// //usage
// arr = [...args];
// arr.insert(index, itemToInsert);


//let concatenate = array.reduceRight(( str, value) => str = str + value, '');
//concatenate([1,2,3,4,5]) ==> 12345


//Round up function
// function round(value, decimal) {
//     return Number(Math.round(value+'e'+decimal)+'e-'+decimal);
// }
//+(Value).toFIxed(2) //2 is number of decimal places and the '+' changes result from string back to digit


//CHECK PRIME FUNCTION
// function isPrime(num) {
//     for (let i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return num !== 1 && num !== 0;
// }
// const isPrime = num => {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++) 
//         if (num % i === 0) return false;

//     return num !== 1 && num !== 0;
// }
// function isPrime(num) {//Most efficient (O(n))
//     if (num <= 1) return false;
//     else if (num <= 3) return true;
//     else if (num % 2 === 0 || num % 3 === 0) return false;

//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;

//         i += 6;
//     }
//     return true;
// }

//To remove whitespace between a string
// string.replace(/\s/g, "");



// let numbers = [0, 8, 0, 6, 0, 7, 7, 1, 4, 3]
// numbers.splice(0, 0, '(');
// numbers.splice(4, 0, ')', ' ');
// numbers.splice(9, 0, '-');

// console.log(numbers.join('')); //always put the final method e.g arr.join('') in the log method;


// function plus() {
//     return '+';
// }

// function minus() {
//     return '-';
// }

// function five(...args) {
//     if (!args)
//         return 5;

//     else return 5(...args);
// }

// function two(...args) {
//     if (!args)
//         return 2;

//     else return 2(...args);
// }

// console.log()


// let test = ['name', 5, 6, 8, 9, 'whatever', 'yeah'];
// let res = test.map(t => {
//     if (typeof t !== 'number') return t.toUpperCase();
//     else return t;
// })

// console.log(res);