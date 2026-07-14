const fibonacci = function(num) {
  if (Number(num) === 0) return 0;

  if (num < 0) return "OOPS";

  let previousResult = 0;
  let result = 1;

  for(let i = 1; i < num; i++) {
    let temp = previousResult + result;
    previousResult = result;
    result = temp;
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
