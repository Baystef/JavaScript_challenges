const input = document.querySelector('#arrayInput');
const convert = document.querySelector('button');
const result = document.querySelector('.result');


const arrayToObj = arr => {

    if (arr.length === 0) {
        alert('Invalid Array');
        throw new Error('Invalid Array');
    }
    
    let array = arr.value.toString().split(' ').map(el => el > 0 ? Number(el) : el);


    let str = array.filter(a => typeof a === 'string');
    let num = array.filter(a => typeof a === 'number');

    let output = {
        string: str,
        number: num
    };

    console.log(output);
    result.innerHTML = JSON.stringify(output, null, "\t");
}


convert.addEventListener('click', function () {
    arrayToObj(input);
    input.value = '';
});

// let array = ['bee', 6, 'better', 5, 'bayo', 4, 'beast', 3, 'ba', 8, 'b'];
//    let notArray = {name: 'Adebayo', phone: 07060771436, surname: 'Daramola'}
//    console.log(arrayToObj(notArray))



// Sort by length algorithm
//  const sortIt = array => {
//      return array.sort((a, b) => (b.length - a.length));
//  }
//let playersName = ['ronlsdinho','pepe','ronlado','ba','tayo']
//  console.log(sortIt(array));