// if (pixel.includes('px')) {
//     remConvert();
// }

function remConvert(pixel) {
    if (pixel === '0') return 0;

    let re = /\d+/;
    if (re.test(pixel)) {
        return `${Number(pixel.substring(0, pixel.length - 2)) / 16}rem;`;
    } else {
        return 'Enter a valid number';
    }
    
}

// Array.prototype.remove = function(from, to) {
//     let rest = this.slice((to || from) + 1 || this.length);
//     this.length = from < 0 ? this.length + from  : from;
//     return this.push.apply(this, rest);
// };

console.log(remConvert('20px'));