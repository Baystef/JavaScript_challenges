function toOrdinal(n) {
    if (n === 0) return '0';

    const length = String(n).length;
    let re =/^[1-1][1-9]$/;
    let testTh = re.test(n);

    if (testTh) return `${n}th`;
    if (length > 2 && re.test(parseInt(String(n).substr(-2), 10))) return `${n}th`;

    let lastDigit = String(n).substr(-1);

    switch (lastDigit) {
        case '1':
            if(!testTh) return `${n}st`;
            break;
    
        case '2':
            if(!testTh) return `${n}nd`;
            break;
    
        case '3':
            if(!testTh) return `${n}rd`;
            break;

            
        default:
            if(!testTh) return `${n}th`;
            break;
    }


}

console.log(toOrdinal(112));



