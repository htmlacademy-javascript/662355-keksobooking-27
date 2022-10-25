import { getRandomInt, getRandomFloat } from './util.js';
import { getAvatar, getRandomTitle, getRandomType, getRandomTime, getRandomFeatures, getRandomDescription, getRandomPhotos } from './data.js';


const OFFERS_COUNT = 10;

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
