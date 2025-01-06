const palindromes = function (str) {
    charArr = str.split('').filter(item => item !== '!' && item !== '.' && item !== ',' && item !== " " && typeof (item) !== "number");
    copyCharArr = charArr.slice('');
    copyCharArr.reverse();
    let isPalindrome = true;
    console.log(charArr);
    charArr.forEach((item, index) => {
        if (item.toLowerCase() !== copyCharArr[index].toLowerCase()) {
            isPalindrome = false;
        }
    })

    return isPalindrome;
};

palindromes("Animal loots foliated detail of stool lamina.")

// Do not edit below this line
module.exports = palindromes;
