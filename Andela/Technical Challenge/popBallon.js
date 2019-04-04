const input = document.querySelector('#balloon');
const popIt = document.querySelector('.pop');
const popped = document.querySelector('.popped');



//Input validator
input.oninput = checkKey;
popIt.onclick = displayResult;


function checkKey() {
    let clean = this.value.replace(/[^0-9,]/g, "");

    if (clean !== this.value) {
        popped.textContent = `This is not a balloon, see above for what a balloon is`;
        this.value = clean;
    } else {
        popped.textContent = ``;
    };
}



function displayResult()  {
    let party = input.value === '' || ',' ? popped.innerHTML = `I pop balloons, not air. Please enter a balloon` : (input.value).split(',').map(Number);
   
    console.log(party);
    popped.innerHTML = pop(party);
    console.log(pop(party));

    input.value = '';
    input.focus();
}


function pop(balloons) {
   
    return balloons.reduce((arr, elem, i, copy) => {
       //arr is initial value of resulting array
        const spread = (elem, i, dir) => {
            //if array element is less than 1 or index of element not present in array copy,stop recursion
            if (elem < 1 || !(i in copy)) return;

            arr[i] += elem;
            spread(elem - 1, i + dir, dir);
        }

        spread(elem - 1, i - 1, -1);
        spread(elem - 1, i + 1, 1);

        return arr;
    }, [...balloons]);

}


// const arr = [0, 0, 0, 0, 4, 0, 0, 3, 0];
// const arr2 = [0, 0, 2, 0, 0];
// const arr3 = [3,0,0,0,0];
// console.log(pop(arr));


// function pop(a) {
//     let add = a.map(_ => 0);

//     a.forEach((x, i) => {
//         for (let c = 1; x > 1 && c < a.length; c++, x--) {
//             add[i + c] = x - 1;
//             add[i - c] = x - 1;
//         }
//     });

//     return a.map((x, i) => x + add[i]);
// }


// function pop(balloon) {
//     let res = [];

//     for (let i = 0; i < balloon.length; i++) {

//         let n = balloon[i];




//         if (n !== 0 && i < balloon.length - 1) {
//             let p = balloon.indexOf(balloon[i]);

//             let before = balloon[p - 1];
//             let after = balloon[p + 1];
//             res.push(before + n - 1);
//             res.push(n);
//             res.push(after + n - 1);

//         } else {
//             res.push(n);
//             // i++;
//         }

//     }
//     return res;
// }