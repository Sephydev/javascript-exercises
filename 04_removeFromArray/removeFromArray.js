const removeFromArray = function (arr, ...nums) {
    let filteredArray;

    filteredArray = arr.filter(elem => !nums.includes(elem));

    console.log(filteredArray);
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
