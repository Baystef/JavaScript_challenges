//A argument 'encode' is fed into decode(), it is then reversed and converted into
//ASCII characters brilliantly;

function decode(encoded) {
    const re1 = /^(6[5-9]|[78][0-9]|90)$/;
    const re2 = /^(9[7-9]|1[01][0-9]|12[0-2])$/;
    const re32 = /^3[2]$/;

    const out = encoded.split('').reverse();

    const res = [];

    for (let i = 0; i < out.length; i++) {
        let char = `${out[i]}${out[i+1]}`

        if (re1.test(Number(char)) || re2.test(Number(char)) || re32.test(Number(char))) {
            res.push(char);
            i++;
        } else {
            res.push(`${char}${out[i+2]}`);
            i += 2;
        }
    }
   
    return String.fromCharCode(...res.map(Number));
}

console.log(decode('2312179862310199501872379231018117927'));

23511011501782351112179911801562340161171141148
2312179862310199501872379231018117927
1219950180111108236115111016623101401611235115012312161151110101111127