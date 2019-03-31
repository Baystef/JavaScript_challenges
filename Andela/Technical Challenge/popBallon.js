const balloon = document.querySelector('#balloon');

function pop(balloons) {
    return balloons.reduce((arr, elem, i, r) => {
      
        const spread = (elem, i, d) => {
            //if array element is less than 1 or index of element not present in resulting array,stop recursion
            if (elem < 1 || !(i in r)) return;

            arr[i] += elem;
            spread(elem - 1, i + d, d);
        }

        spread(elem - 1, i - 1, -1);
        spread(elem - 1, i + 1, 1);
        return arr;
    }, [...balloons]); 

}


const arr = [0, 0, 0, 0, 4, 0, 0, 3, 0];
const arr2 = [0, 0, 2, 0, 0];
const arr3 = [3,0,0,0];
console.log(pop(arr3));

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



