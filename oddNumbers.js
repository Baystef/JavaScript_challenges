function oddNumbers(l, r) {
    for (let i = l; i <= r; i++) {
         if (i % 2 === 1) {
            console.log(i);
         }
    }

}

console.log(oddNumbers(2, 50));