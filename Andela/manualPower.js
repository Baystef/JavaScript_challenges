function power(x, y) {
    if (y) return multiply(x, power(x, y - 1));
    else return 1;
}

function multiply(a, b) {
    if (b) return (a + multiply(a, b - 1));
    else return 0;
}

console.log(power(5, 2));