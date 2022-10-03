function getRandomInt(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return getRandomFloat(newMin, newMax, 0);
}

getRandomInt(1.1, 1.9);

function getRandomFloat(min, max, digits) {
  return (min < 0 || max < 0 || max < min || isNotNumber(min) || isNotNumber(max) || isNotNumber(digits))
    ? NaN
    : (Math.random() * (max - min) + min).toFixed(digits);
}

getRandomFloat(1, 5, 2);

function isNotNumber(param) {
  return typeof param !== 'number';
}
