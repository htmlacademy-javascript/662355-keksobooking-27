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

const filterTypeField = document.querySelector('#housing-type');
const filterPriceField = document.querySelector('#housing-price');
const filterRoomsField = document.querySelector('#housing-rooms');
const filterGuestsField = document.querySelector('#housing-guests');
const filterFeaturesFields = document.querySelectorAll('.map__checkbox');

const filterType = (ad) => {
  if (filterTypeField.value === 'any') {
    return true;
  }
  return ad.offer.type === filterTypeField.value;
};

const filterPrice = (ad) => {
  switch (filterPriceField.value) {
    case 'any':
      return true;
    case 'low':
      return ad.offer.price <= 10000;
    case 'middle':
      return ad.offer.price > 10000 && ad.offer.price <= 50000;
    case 'high':
      return ad.offer.price > 50000;
  }
};

const filterRooms = (ad) => {
  if (filterRoomsField.value === 'any') {
    return true;
  }
  return ad.offer.rooms === +filterRoomsField.value;
};

const filterGuests = (ad) => {
  if (filterGuestsField.value === 'any') {
    return true;
  }
  return ad.offer.guests === +filterGuestsField.value;
};

const filterFeatures = (ad) => {
  const featuresChecked = [];
  filterFeaturesFields.forEach((feature) => {
    if (feature.checked) {
      featuresChecked.push(feature.value);
    }
  });

  if (featuresChecked.length > 0 && ad.offer.features === undefined) {
    return false;
  }
  return featuresChecked.every((feature) => ad.offer.features.includes(feature));
};


const filterOffers = (ad) =>
  filterType(ad) && filterPrice(ad) && filterRooms(ad) && filterGuests(ad) && filterFeatures(ad);

const setChangeEventOnFilter = (renderSimilarOffers) => {
  filterTypeField.addEventListener('change', () => {
    renderSimilarOffers();
  });
  filterPriceField.addEventListener('change', () => {
    renderSimilarOffers();
  });
  filterRoomsField.addEventListener('change', () => {
    renderSimilarOffers();
  });
  filterGuestsField.addEventListener('change', () => {
    renderSimilarOffers();
  });
  filterFeaturesFields.forEach((feature) => feature.addEventListener('click', () => {
    renderSimilarOffers();
  }));
};

export { resetFilter, setChangeEventOnFilter, filterOffers };
