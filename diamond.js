function diamond(n) {
    if (n % 2 === 0 || Math.sign(n) === -1) return null;

    let diam = '';
    for (let i = 0; i < n; i++) {
        let length = Math.abs((n - 2 * i - 1) / 2);
        diam += ' '.repeat(length);
        diam += '*'.repeat(n - 2 * length);
        diam += '\n';
        
    }
    return diam;
}

console.log(diamond(5));

