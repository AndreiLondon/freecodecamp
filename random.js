function randomRange(myMin, myMax) {
    let min = myMin;
    let max = myMax;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
console.log(randomRange(5, 10))