function isPangram(string) {
    return string.replace(/[^a-zA-Z]/g, '').replace(/(.)(?=.*\1)/gi, '').length === 26;
}

const str = 'The quick brown fox jumps over the lazy dog';
const str2 = 'Farmer jack realized that big yellow quilts were expensive';

console.log(isPangram(str2));