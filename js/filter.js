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

const filters = [filterTypeField, filterPriceField, filterRoomsField, filterGuestsField, ...filterFeaturesFields];

const filterByType = (ad) => {
  if (filterTypeField.value === 'any') {
    return true;
  }
  return ad.offer.type === filterTypeField.value;
};

const filterByPrice = (ad) => {
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

const filterByRooms = (ad) => {
  if (filterRoomsField.value === 'any') {
    return true;
  }
  return ad.offer.rooms === +filterRoomsField.value;
};

const filterByGuests = (ad) => {
  if (filterGuestsField.value === 'any') {
    return true;
  }
  return ad.offer.guests === +filterGuestsField.value;
};

const filterByFeatures = (ad) => {
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
  filterByType(ad) && filterByPrice(ad) && filterByRooms(ad) && filterByGuests(ad) && filterByFeatures(ad);

const setChangeEventOnFilter = (renderSimilarOffers) => {
  filters.forEach((filter) => filter.addEventListener('change', () => {
    renderSimilarOffers();
  }));
};

export { resetFilter, setChangeEventOnFilter, filterOffers };
