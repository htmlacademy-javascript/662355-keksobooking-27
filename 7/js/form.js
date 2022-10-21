const form = document.querySelector('.ad-form');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help'
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();
});

const roomsField = form.querySelector('#room_number');
const capacityField = form.querySelector('#capacity');

const roomErrors = {
  1: 'Только для 1 гостя',
  2: 'Для 2 гостей и меньше',
  3: 'Для 3 гостей и меньше',
  100: 'Не для гостей'
};

const roomsOption = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0]
};

const getRoomsErrorMessage = () => roomErrors[roomsField.value];

const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);

pristine.addValidator(roomsField, validateRooms, getRoomsErrorMessage);
pristine.addValidator(capacityField, validateRooms);


const switchStateElements = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

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

export { deactivatePage, activatePage };

