function digital_root(n) {
    //if (Math.sign(n) === -1) return "Enter a positive integer";

    let res = String(n).split('').map(Number).reduce((a, b) => a + b, 0)

    if (String(res).length === 1) {
        return res;

    } else if (String(res).length > 1) {
        return digital_root(res);

    }

}

//solution 2
// function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }