const reverseString = function (str) {
    splitStr = str.split('');
    let reversedStr = splitStr.reverse().join('');

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
