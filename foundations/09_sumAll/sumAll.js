const sumAll = function(num1, num2) {
  if (
    typeof(num1) !== 'number'
    || typeof(num2) !== 'number'
    || num1 % 1 !== 0 
    || num2 % 1 !== 0 
    || num1 < 0 
    || num2 < 0
  ) {
    return "ERROR";
  }

  let arr = [];
  let start = num1 > num2 ? num2 : num1;
  let end = num1 > num2 ? num1 : num2;
  
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }

  return arr.reduce((acc, current) => acc + current);
};

// Do not edit below this line
module.exports = sumAll;
