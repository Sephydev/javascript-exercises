const repeatString = function(str, numOfRepeat) {
  if (numOfRepeat < 0) return "ERROR";

  let finalStr = "";

  for (let i = 0; i < numOfRepeat; i++) {
    finalStr += str;
  }

  return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
