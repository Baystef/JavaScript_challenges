'use strict';

const info = document.querySelector('.info');
const input = document.querySelector('#arrayInput');
const convert = document.querySelector('button');
const result = document.querySelector('.result');


window.onload = function() {
    input.value = '';
}

const arrayToObj = arr => {
   
    if (arr.value.length === 0 || arr.value === '') {
        const error = document.createElement('p');
        error.textContent = 'Please enter valid strings and numbers';
        error.style.backgroundColor = 'orange';
        error.style.color = 'red';

        info.appendChild(error);

        throw new Error('Invalid input');
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
    input.focus();
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