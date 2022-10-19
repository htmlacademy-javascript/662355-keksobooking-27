import { createOffers } from './offer.js';
import { offerToCard } from './createSimilarElement.js';

const offers = createOffers();
const cards = offers.map(offerToCard);

const blockMap = document.querySelector('#map-canvas');
blockMap.append(cards[0]);
