const setAnyValue = (id) => {
  const field = document.querySelector(`#${id}`);
  field.value = 'any';
};

const resetFilter = () => {
  setAnyValue('housing-type');
  setAnyValue('housing-price');
  setAnyValue('housing-rooms');
  setAnyValue('housing-guests');
  const features = document.querySelectorAll('.map__features input');
  features.forEach((elem) => {
    elem.checked = false;
  });
};

export{resetFilter};
