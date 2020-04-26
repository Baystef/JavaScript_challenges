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

//Check if length of number is 1 digit or two digits, return 1 number if length = 1 or 2 but return 2 digits if length > 2;
// let re =/^[1-1][1-9]$/;
// function test(n) {
//     if (String(n).length === 1 || String(n).length === 2) {
//         return String(n).substr(-1);
//     } else if (re.test(parseInt(String(n).substr(-2), 10)) && String(n).length > 2) {
//          return String(n).substr(-2);
//     }
// }

//Regular Expresion for commas and numbers
// const re = /^\d+(,\d+)*$/;

// function empty() {
//     if (this.value.length > 0) {
//         popIt.disabled = false;
//     } else {
//         popIt.disabled = true;
//     }
// }


//map all elements of the array to zero
// const array = [5, 10, 15, 20, 25, 30];

// console.log(array.map(_ => 0));

// class Loans {
//   constructor(user, loanAmount, tenor, id = 0, status = 'pending', repaid = 'false') {
//     this.id = id + 1;
//     this.user = user;
//     this.loanAmount = loanAmount;
//     this.tenor = tenor;
//     this.status = status;
//     this.repaid = repaid;
//     this.interest = (function interest() {
//       return (loanAmount * 0.05);
//     }());
//     this.monthlyInstall = (function monthlyInstall() {
//       return (loanAmount + this.interest) / tenor;
//     }).call(this);
//     this.balance = (function balance() {
//       return (loanAmount + this.interest);
//     }).call(this);

//     this.createdAt = new Date().toLocaleString();
//   };



//   applied() {
//     return `You have applied for a loan of ${this.loanAmount} and the interest accrued will be ${this.interest} at a rate of 5%. 
//     Your total repayment is ${this.balance} with a monthly installment of ${this.monthlyInstall} over a period of ${this.tenor} months`;
//   };
// };

// const loans = [];
// const loan = new Loans('daramola.adebayo', 50000, 5);
// const loan1 = new Loans('tosin.adegeye', 100000, 6);

// console.log(`${JSON.stringify(loan)}
//             ${loan.applied()}`);




// function Loans(user, loanAmount, tenor, createdAt = new Date().toLocaleString(), status = 'pending', repaid = 'false') {
//   interest = () => (loanAmount * 0.05);
//   monthlyInstall = () => ((loanAmount + interest()) / tenor);
//   balance = () => (loanAmount + interest());

//   return {
//     user,
//     loanAmount,
//     tenor,
//     status,
//     repaid,
//     interest: interest(),
//     monthlyInstall: monthlyInstall(),
//     balance: balance(),
//     createdAt
//   }
// }
// console.log(Loans('daramola@quic.com', 5000, 12));


// //Gets date month and year from ISO (1575436577)
// function timeSince(iso){
//   const now = new Date();
//   const timestamp = new Date(iso);
//   const secondsPast = (now.getTime() - timestamp.getTime()) / 1000;
//   if (secondsPast < 60) {
//     return `${Number(secondsPast)}s`;
//   }
//   if (secondsPast < 3600) {
//     return `${Number(secondsPast/60)}m`;
//   }
//   if (secondsPast <= 86400) {
//     return `${Number(secondsPast/3600)}h`;
//   }
//   if (secondsPast > 86400) {
//     day = timestamp.getDate();
//     month = timestamp.toDateString().match(/[a-zA-Z]*/)[0].replace(' ', '');
//     year = timestamp.getFullYear() == now.getFullYear() ? '' : ' '+timestamp.getFullYear();
//     return `${day} ${month}${year}`;
//   }
// };
