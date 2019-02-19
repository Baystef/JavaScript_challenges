function duplicatCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}


function duplicatCount(text) {
    return text
        .toLowerCase()
        .split('')
        .filter((val, i, arr) => arr.indexOf(val) !== i && arr.lastIndexOf(val) === i).length;
}

const duplicatCount = (text) => (text.match(/(\w(?=(?!.*\1.*\1).*\1)/gi) || []).length;