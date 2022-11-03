const ALERT_SHOW_TIME = 4000;

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
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

export { getRandomInt, getRandomFloat, prependZero2, getRandomElement, getRandomArray, showAlert, debounce };
