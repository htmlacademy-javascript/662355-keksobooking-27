const DEACTIVATE = true;
const ACTIVATE = false;

const switchDisabled = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

const switchStateForm = (deactivate) => {
  const form = document.querySelector('.ad-form');
  if (deactivate) {
    form.classList.add('ad-form--disabled');
  } else {
    form.classList.remove('ad-form--disabled');
  }
  const fieldsets = form.querySelectorAll('fieldset');
  switchDisabled(fieldsets, deactivate);
};

const switchStateFilter = (deactivate) => {
  const filter = document.querySelector('.map__filters');
  if (deactivate) {
    filter.classList.add('map__filters--disabled');
  } else {
    filter.classList.remove('map__filters--disabled');
  }
  const selects = filter.querySelectorAll('select');
  const fieldsets = filter.querySelectorAll('fieldset');
  switchDisabled(selects, deactivate);
  switchDisabled(fieldsets, deactivate);
};

const switchStatePage = (state) =>{
  switchStateForm(state);
  switchStateFilter(state);
};

const deactivatePage = () => switchStatePage(DEACTIVATE);
const activatePage = () => switchStatePage(ACTIVATE);

export { deactivatePage, activatePage };

