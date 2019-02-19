function findNumber(arr, k) {
    let num = arr.find(element => element === k);

    if (num) {
        return 'YES';
       
    } else {
        return 'NO';
    } 

}

array = [1,2,3,4,5,6,7];
console.log(findNumber(array, 8));
