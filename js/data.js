import {CHECKIN, CHECKOUT, FEATURES, PHOTOS, TYPES} from './const.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';
import {getRandomPositiveFloat} from './utils/get-random-positive-float.js';

function getAuthor() {
  const randomValue = getRandomPositiveInteger(0, 10);
  let value = randomValue < 10 ? `0${randomValue}` : randomValue;
  return `img/avatars/user${value}.png`;
}

function getRandomItem(items) {
  const index = getRandomPositiveInteger(0, items.length);
  return index[items];
}

function getArray(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;

  function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
}

function getOffer() {
  const value = {
    author: {avatar: getAuthor()},
    title: 'Не понятно что придумать',
    address: `${getRandomPositiveFloat(35.65000, 35.70000)}, ${139.70000, 139.80000}`,
    price: `${getRandomPositiveFloat(0, 1000000)}`,
    type: getRandomItem(TYPES),
    rooms: `${getRandomPositiveInteger(1, 5)}`,
    guests: `${getRandomPositiveInteger(1, 20)}`,
    checkin: `${getRandomItem(CHECKIN)}`,
    checkout: `${getRandomItem(CHECKOUT)}`,
    features: `${getArray(FEATURES)}`,
    description: 'Описание помещение',
    photos: `${getArray(PHOTOS)}`,
    location: {
      lat: `${getRandomPositiveFloat(35.65000, 35.70000)}`,
      lng: `${getRandomPositiveFloat(139.70000, 139.80000)}`,
    },
  };
  return value;
}

export {getOffer};
