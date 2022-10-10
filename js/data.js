import { prependZero2, getRandomElement, getRandomArray } from './util.js';


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
    return `img/avatars/user${prependZero2(userId)}.png`;
  };
};

const getAvatar = getAvatarFunction();

const getRandomFeatures = () => getRandomArray(FEATURES);
const getRandomPhotos = () => getRandomArray(PHOTOS);
const getRandomDescription = () => getRandomElement(DESCRIPTIONS);
const getRandomTitle = () => getRandomElement(TITLES);
const getRandomType = () => getRandomElement(TYPES);
const getRandomTime = () => getRandomElement(TIMES);

export { getAvatar, getRandomTitle, getRandomType, getRandomTime, getRandomFeatures, getRandomDescription, getRandomPhotos };
