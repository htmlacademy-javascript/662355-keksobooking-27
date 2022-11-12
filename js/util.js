const ALERT_SHOW_TIME = 4000;
const DEFAULT_COORDINATE = {
  lat: 35.6895000,
  lng: 139.6917100,
};

const mapCoorToText = (coor) => `${coor.lat.toFixed(5)}, ${coor.lng.toFixed(5)}`;

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

export { showAlert, debounce, DEFAULT_COORDINATE, mapCoorToText };
