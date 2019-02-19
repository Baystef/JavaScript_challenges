// function mealTotal(price , tax, tip) {
//     let tax = price * 0.06;
//     let tip = price * 0.10;
//     return `Price      $${price.toFixed(2)}
//             Tax        $${tax.toFixed(2)}
//             Tip        $${tip.toFixed(2)}
//             |||||||||||||||||
//             Total      $${(price + tax + tip)}`
// }
function mealTotal(price , tax, tip) {
    // let taxed = tax * 0.01 * price;
    // let tipped = tip * 0.01 * price;
    // return `Price      $${price.toFixed(2)}
    //         Tax        $${taxed.toFixed(2)}
    //         Tip        $${tipped.toFixed(2)}
    //         |||||||||||||||||
    //         Total      $${(price + taxed + tipped)}`
    return `${price + (tax * 0.01 * price) + (tip * 0.01 * price)}`
}

console.log(mealTotal(48.50, 6, 10));