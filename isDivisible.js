function isDivisible (n ,x, y) {
    return (n % x === 0) && (n % y === 0);
}

const isDivisible = (n, x, y) => !(n % x || n % y);
console.log(isDivisible(6, 3, 2));