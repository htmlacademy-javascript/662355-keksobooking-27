function getRandomInt(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return getRandomFloat(newMin, newMax, 0);
}

getRandomInt(1.1, 1.9);

function getRandomFloat(min, max, digits) {
  if (min < 0 || max < 0 || max < min) {
    return NaN;
  }

  return (Math.random() * (max - min) + min).toFixed(digits);
}

getRandomFloat(1, 5, 2);
