const myFunc = (x, y) => {
    let list = [];

    if(x > y) {
        for (let i = y + 1; i < x; i++) {
            if (i % 2 === 0) {
                list.push(i);
            }
        }
    } else {
        for (let i = x + 1; i < y; i++) {
            if (i % 2 === 1) {
                list.push(i);
            }
        }
    }


    return list;
}

console.log(myFunc(-2.5, -10));

