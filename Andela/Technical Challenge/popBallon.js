const arr = [0, 0, 0, 0, 4, 0, 0, 3, 0];

console.log(arr.map(n => {
    if (n == 0) return n;
    else return n - 1;
}))
