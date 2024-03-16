// index.js

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomNumberList(length, min, max) {
    const randomNumberList = [];
    for (let i = 0; i < length; i++) {
      randomNumberList.push(generateRandomNumber(min, max));
    }
    return randomNumberList;
  }
  
  const length = 5;
  const min = 1;
  const max = 100;
  const randomNumberList = generateRandomNumberList(length, min, max);
  console.log(`Random number list (${length} numbers between ${min} and ${max}):`, randomNumberList);
  