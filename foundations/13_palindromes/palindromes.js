const palindromes = function (str) {
  const filteredStr = str.replace(/[!., ]/g, '').toLowerCase();
  const strArray = filteredStr.split('');
  const strArrayReversed = strArray.toReversed();
  let isPalindrome = true;

  
  isPalindrome = strArray.every((cara, index) => {
    let isSameCara = cara === strArrayReversed[index];

    return isSameCara;
  })

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
