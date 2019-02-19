function isNarcissistic(n) {
    let power = String(n).length;

    return n === Number(String(n).split('').map(n => n**power).reduce((a, b) => a + b));
}


// const isNarcissistic = n => n === [...`${n}`].map(Number).reduce((s, i) => s + i**`${n}`.length, 0);
console.log(isNarcissistic(1));