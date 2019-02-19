function descendingOrder(n) {
    //if a negative integer is fed to the function, do nothing but tell user to enter a positive number
    if (Math.sign(n) === -1 || 0) return "Enter Positive Integer";

    //  let arrayNum = n.toString().split('');
    //     let sorted = arrayNum.sort((a, b) => b - a);

    //     let res = sorted.join('');
    //     return parseInt(res);
}


function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
}