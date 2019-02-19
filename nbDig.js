function nbDig (n, d) {
    let squares = ''
    let re = new RegExp(d, 'g');
    for (let i = 0; i <= n; i++) {
        squares += (i * i);
    }
    return squares.match(re).length;
}

console.log(nbDig(25, 1));
