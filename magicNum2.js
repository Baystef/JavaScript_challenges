function magic_sum(arr) {
    if (!arr || !Array.isArray(arr))
        return 0;
    else {

        let odd = arr.filter(n => n % 2 === 1);
        let threeS = []

        for (let i = 0; i < odd.length; i++) {

            if (odd[i].toString().includes('3')) {
                threeS.push(odd[i]);
            }

            // console.log(threeS);
        }
        return threeS.reduce((a, b) => a + b, 0);
    }
}







let array = [3, 12, 13, 30, 33, 23, 41, 57]
console.log(magic_sum(array));