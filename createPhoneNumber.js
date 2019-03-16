function createPhoneNumber(numbers) {
    numbers.splice(0, 0, '(');
    numbers.splice(4, 0, ')', ' ');
    numbers.splice(9, 0, '-');

    return numbers.join('');
}

// function createPhoneNumber(numbers) {
//     let format = '(xxx) xxx-xxxx';

//     for (let i = 0; i < numbers.length; i++)
//         format = format.replace('x', numbers[i]);

//     return format;
// }

// function createPhoneNumber(numbers) {
//     return numbers.reduce((p,c) => p.replace('x', c), "(xxx) xxx-xxxx");
// }

// function createPhoneNumber(numbers) {
//     return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }