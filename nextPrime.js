// function nextPrime(n) {
//     n += 1
//     while (!isPrime(n)) {
//         n++;
//     }
//     return n;
// }

const nextPrime = n => isPrime(n +1) ? n + 1 : nextPrime(n + 1);

//Prime check function
function isPrime(num) {
    if (num <= 1) return false;
    else if (num <= 3) return true;
    else if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;

        i += 6;
    }
    return true;
}

console.log(nextPrime(2971));