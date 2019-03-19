function generateRange(min, max, step) {
    if (min > max || step < 0) return;

    let result = [];

    for (let i = min; i <= max; i += step) {
        result.push(i);
    }

    return result;
}

console.log(generateRange(1, 10, 3));