const palindromes = function (str) {
  const filteredStr = str
    .toLowerCase()
    .split('')
    .filter(c => !(c === ',' || c === ' ' || c === '.' || c === '!'))
    .join('');

  const reverseStr = filteredStr
    .split('')
    .reverse()
    .join('');

    console.log(reverseStr);

  return reverseStr === filteredStr;
};

// Do not edit below this line
module.exports = palindromes;
