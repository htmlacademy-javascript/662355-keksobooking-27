import { sendOfferForm } from './api.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const form = document.querySelector('.ad-form');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help'
});

const setOfferFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {

      const formData = new FormData(evt.target);

      sendOfferForm(formData, onSuccess, onFail);

    }
  });
};

const resetButton = document.querySelector('.ad-form__reset');
const setResetButtonClick = (reset) => {
  resetButton.addEventListener('click', reset);
};

const titleField = form.querySelector('#title');
const roomsField = form.querySelector('#room_number');
const capacityField = form.querySelector('#capacity');
const avatarField = form.querySelector('#avatar');
const previewAvatar = form.querySelector('.ad-form-header__preview img');
const photoField = form.querySelector('#images');
const containerPhotos = form.querySelector('.ad-form__photo');

const checkFileTypes = (fileName) => FILE_TYPES.some((it) => fileName.toLowerCase().endsWith(it));


avatarField.addEventListener('change', () => {
  const file = avatarField.files[0];
  if (checkFileTypes(file.name)) {
    previewAvatar.src = URL.createObjectURL(file);
  }

});

photoField.addEventListener('change', () => {
  const files = photoField.files;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (checkFileTypes(file.name)) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.classList.add('ad-form__photo');
      fragment.appendChild(img);
    }
  }
  containerPhotos.appendChild(fragment);

});

const roomErrors = {
  1: 'Только для 1 гостя',
  2: 'Для 2 гостей и меньше',
  3: 'Для 3 гостей и меньше',
  100: 'Не для гостей'
};

const roomsOption = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const getRoomsErrorMessage = () => roomErrors[roomsField.value];

const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);

pristine.addValidator(roomsField, validateRooms, getRoomsErrorMessage);
pristine.addValidator(capacityField, validateRooms);

roomsField.addEventListener('change', () => pristine.validate(capacityField));
capacityField.addEventListener('change', () => pristine.validate(roomsField));

const typeField = form.querySelector('#type');
const priceField = form.querySelector('#price');
const timeinField = form.querySelector('#timein');
const timeoutField = form.querySelector('#timeout');

const typeOption = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const validatePrice = () => priceField.value >= typeOption[typeField.value];

const getPriceErrorMessage = () => `Минимальная цена ${typeOption[typeField.value]}`;

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);
const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  connect: 'lower',
  step: 1,
  start: 1000,
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  }
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

priceField.addEventListener('change', () => {
  sliderElement.noUiSlider.set(priceField.value);
});

typeField.addEventListener('change', () => {
  priceField.placeholder = typeOption[typeField.value];
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: typeOption[typeField.value],
      max: 100000
    }
  });
});

const switchStateElements = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

timeinField.addEventListener('change', () => {
  timeoutField.value = timeinField.value;
});

timeoutField.addEventListener('change', () => {
  timeinField.value = timeoutField.value;
});

const switchStateForm = (state) => {
  const fieldsets = form.querySelectorAll('fieldset');
  form.classList.toggle('ad-form--disabled', state);
  switchStateElements(fieldsets, state);
};

const switchStateFilter = (state) => {
  const filter = document.querySelector('.map__filters');
  const selects = filter.querySelectorAll('select');
  const fieldsets = filter.querySelectorAll('fieldset');
  filter.classList.toggle('map__filters--disabled', state);
  switchStateElements(selects, state);
  switchStateElements(fieldsets, state);
};

const switchStatePage = (state) => {
  switchStateForm(state);
  switchStateFilter(state);
};

const deactivatePage = () => switchStatePage(true);
const activatePage = () => switchStatePage(false);


const resetForm = () => {
  titleField.value = '';
  typeField.value = 'flat';
  sliderElement.noUiSlider.set(1000);
  priceField.value = '1000';
  roomsField.value = '1';
  capacityField.value = '3';
  timeinField.value = '12:00';
  const featuresForm = form.querySelectorAll('.features__checkbox');
  featuresForm.forEach((elem) => {
    elem.checked = false;
  });
};

export { deactivatePage, activatePage, setOfferFormSubmit, resetForm, setResetButtonClick };
