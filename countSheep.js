function countSheep(shed) {
    return shed.filter(v => v === 'true').length;
}

let array = ['true', 'true', 'true', 'true', 'true', 'false', 'true', 'true', 'false', 'true', 'true', 'false']

console.log(countSheep(array));