
function getRandomInt(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return getRandomFloat(newMin, newMax, 0);
}

function getRandomFloat(min, max, digits) {
  return (min < 0 || max < 0 || max < min || isNotNumber(min) || isNotNumber(max) || isNotNumber(digits))
    ? NaN
    : +(Math.random() * (max - min) + min).toFixed(digits);
}

function isNotNumber(param) {
  return typeof param !== 'number';
}

const prependZero2 = (number) => (number < 10 ? '0' : '') + number;

const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

const getRandomArray = (array) => {
  const result = array.filter(() => getRandomInt(0, 1));
  if (result.length === 0) {
    result.push(getRandomElement(array));
  }
  return result;
};

export { getRandomInt, getRandomFloat, prependZero2, getRandomElement, getRandomArray };