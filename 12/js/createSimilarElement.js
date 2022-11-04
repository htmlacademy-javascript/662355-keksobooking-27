const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const offerType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const offerFeatures = {
  wifi: 'Вай-фай',
  dishwasher: 'Посудомоечная машина',
  parking: 'Паркинг',
  washer: 'Стиральная машина',
  elevator: 'Лифт',
  conditioner: 'Кондиционер'
};

const getPhotos = (photos, imgTemplate) => {
  const imgs = photos.map((photo) => {
    const img = imgTemplate.cloneNode(true);
    img.src = photo;
    return img;
  });
  return imgs;
};

const hide = (elem) => elem.classList.add('hidden');

const fillTitle = (card, adv) => {
  const popupElement = card.querySelector('.popup__title');
  if (adv.offer.title) {
    popupElement.innerText = adv.offer.title;
  } else {
    hide(popupElement);
  }
};

const fillAddress = (card, adv) => {
  const popupElement = card.querySelector('.popup__text--address');
  if (adv.offer.address) {
    popupElement.innerText = adv.offer.address;
  } else {
    hide(popupElement);
  }
};

const fillPrice = (card, adv) => {
  const popupElement = card.querySelector('.popup__text--price');
  if (adv.offer.price) {
    popupElement.innerText = `${adv.offer.price} ₽/ночь`;
  } else {
    hide(popupElement);
  }
};

const fillType = (card, adv) => {
  const popupElement = card.querySelector('.popup__type');
  if (adv.offer.type) {
    popupElement.innerText = offerType[adv.offer.type];
  } else {
    hide(popupElement);
  }
};

const fillCapacity = (card, adv) => {
  const popupElement = card.querySelector('.popup__text--capacity');
  if (adv.offer.rooms && adv.offer.guests) {
    popupElement.innerText = `${adv.offer.rooms} комнаты для ${adv.offer.guests} гостей`;
  } else {
    hide(popupElement);
  }
};

const fillTime = (card, adv) => {
  const popupElement = card.querySelector('.popup__text--time');
  if (adv.offer.checkin && adv.offer.checkout) {
    popupElement.innerText = `Заезд после ${adv.offer.checkin}, выезд до ${adv.offer.checkout}`;
  } else {
    hide(popupElement);
  }
};
const fillFeatures = (card, adv) => {
  const popupElement = card.querySelector('.popup__features');
  if (adv.offer.features) {
    popupElement.innerText = adv.offer.features
      .map((feature) => offerFeatures[feature])
      .join(', ');
  } else {
    hide(popupElement);
  }
};
const fillDescription = (card, adv) => {
  const popupElement = card.querySelector('.popup__description');
  if (adv.offer.description) {
    popupElement.innerText = adv.offer.description;
  } else {
    hide(popupElement);
  }
};

const fillPhotos = (card, adv) => {
  const popupPhotos = card.querySelector('.popup__photos');
  if (adv.offer.photos) {
    const imgTemplate = popupPhotos.querySelector('img');
    const photos = getPhotos(adv.offer.photos, imgTemplate);
    imgTemplate.remove();
    photos.forEach((photo) => popupPhotos.append(photo));
  } else {
    hide(popupPhotos);
  }
};

const fillAvatar = (card, adv) => {
  const popupElement = card.querySelector('.popup__avatar');
  if (adv.author.avatar) {
    popupElement.innerText = adv.author.avatar;
  } else {
    hide(popupElement);
  }
};

const offerToCard = (adv) => {
  const card = offerTemplate.cloneNode(true);
  fillTitle(card, adv);
  fillAddress(card, adv);
  fillPrice(card, adv);
  fillType(card, adv);
  fillCapacity(card, adv);
  fillTime(card, adv);
  fillFeatures(card, adv);
  fillDescription(card, adv);
  fillPhotos(card, adv);
  fillAvatar(card, adv);
  return card;
};

export { offerToCard };
