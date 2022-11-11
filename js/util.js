const ALERT_SHOW_TIME = 4000;

const DEFAULT_COORDINATE = {
  lat: 35.6895000,
  lng: 139.6917100,
};

const mapCoorToText = (coor) => `${coor.lat.toFixed(5)}, ${coor.lng.toFixed(5)}`;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('modal-alert');
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomInt, getRandomFloat, prependZero2, getRandomElement, getRandomArray, showAlert, debounce, DEFAULT_COORDINATE, mapCoorToText };
