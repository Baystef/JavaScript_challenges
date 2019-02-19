function validatePin(digits) {
    let regExp = /^\d{4}$|^\d{6}$/; //check if it's a 4-digit or 6-digit number;

    return regExp.test(digits);
}

let numbers = "0000";
    numbers2 = "12345",
    numbers3 = "123456";

console.log(validatePin(numbers));