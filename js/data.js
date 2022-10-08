import { getRandomInt, getRandomFloat, pad2, getRandomElement, getRandomArray } from './util.js';

const OFFERS_COUNT = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TITLES = ['Новая квартира', 'Трехкомнатный дом', 'Свободное бунгало'];
const DESCRIPTIONS = ['Просторные комнаты', 'Современный дизайн', 'Роскошная мебель'];

const getAvatarFunction = () => {
  let userId = 0;
  return () => {
    userId++;
    return `img/avatars/user${pad2(userId)}.png`;
  };
};

const getAvatar = getAvatarFunction();

const getRandomFeatures = () => getRandomArray(FEATURES);
const getRandomPhotos = () => getRandomArray(PHOTOS);
const getRandomDescription = () => getRandomElement(DESCRIPTIONS);
const getRandomTitle = () => getRandomElement(TITLES);
const getRandomType = () => getRandomElement(TYPES);
const getRandomTime = () => getRandomElement(TIMES);


const createOffer = () => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5)
  };
  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomTitle(),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInt(1000, 1000000),
      type: getRandomType(),
      rooms: getRandomInt(1, 10),
      guests: getRandomInt(1, 10),
      checkin: getRandomTime(),
      checkout: getRandomTime(),
      features: getRandomFeatures(),
      description: getRandomDescription(),
      photos: getRandomPhotos(),
    },
    location: location,
  };
};

const createOffers = () => Array.from({ length: OFFERS_COUNT }, createOffer);


export { createOffers };
