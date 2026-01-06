const fibonacci = function(numStr) {
  const num = Number(numStr);
  let firstNum = 0;
  let secondNum = 1;

  if (num === 0) {
    return 0;
  }

  if (num < 0) {
    return "OOPS";
  }

  for (let i = 1; i < num; i++) {
    let temp = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = temp; 
  }

  return secondNum;

};

// Do not edit below this line
module.exports = fibonacci;
