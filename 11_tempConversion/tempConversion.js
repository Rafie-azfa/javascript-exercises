const convertToCelsius = function(temp) {
  let formulaFahrenheit = (temp - 32) * (5/9);
  return Math.round(formulaFahrenheit * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let formulaCelsius = temp * (9/5) + 32;
  return Math.round(formulaCelsius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
