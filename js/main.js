function getRandomInt(min, max) {
  return getRandomFloat(min, max, 0);
}


getRandomInt(5, 10);

function getRandomFloat(min, max, digits) {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }

  return (Math.random() * (max - min) + min).toFixed(digits);
}

getRandomFloat(1, 5, 2);
