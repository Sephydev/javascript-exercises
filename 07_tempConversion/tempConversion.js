const convertToCelsius = function (far) {
  let cel = ((far - 32) * (5 / 9));

  if (cel % 1 !== 0) {
    cel = Number(cel.toFixed(1));
  }

  return cel;

};

const convertToFahrenheit = function (cel) {
  let far = ((cel * (9 / 5) + 32));

  if (far % 1 !== 0) {
    far = Number(far.toFixed(1));
  }

  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
