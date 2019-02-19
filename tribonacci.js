function tribonacci(arr , n) {

    for (let i = 3; i <= n; i++) {
        const a = arr[i - 1];
        const b = arr[i - 2];
        const c = arr[i - 3];

        arr.push(a + b + c);
    }

    return arr.slice(0, n);
}

// function tribonacci(arr , n) {
//     for (let i = 3; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3]
//     }
//     return arr.slice(0, n); //slice from 1st element upto nth element
// }

// function tribonacci(arr , n) {
//     while (arr.length < n) {
//         arr.push(arr.slice(-3).reduce((a,b) => a + b));
//     }
//     return arr.slice(0, n);
// }


let numbers = [1,1,1];
console.log(tribonacci(numbers, 6));