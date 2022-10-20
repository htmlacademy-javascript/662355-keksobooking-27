const switchStateElements = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

const switchStateForm = (state) => {
  const form = document.querySelector('.ad-form');
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

