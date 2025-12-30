const removeFromArray = function(arr, ...elemToDelete ) {
  console.log(elemToDelete)
  return arr.filter((elem) => !elemToDelete.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
