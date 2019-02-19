const magic_sum = arr => {
    if (arr.constructor !== Array || arr.length === 0) return 0;

  
        let odd = arr.filter(n => n % 2 === 1);
        //let threeS = [];
        let result = 0;

        for (let element of odd) {
            if (element.toString().includes('3')) {
                //threeS.push(element);
                result += element;
            }
        }
        return result;
        //return threeS.reduce((a, b) => a + b, 0);
}






let array = [3, 12, 13, 30, 33, 23, 41, 57]
console.log(magic_sum(array));
// let obj = {
//     name: "Faleti",
//     age: 69
// }
// let empArray = []