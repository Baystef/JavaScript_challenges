const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= (mpg * fuelLeft);
}
console.log(zeroFuel(50, 25, 2));