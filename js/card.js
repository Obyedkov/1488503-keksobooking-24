import {Type} from './const.js';
import {TypeResource} from './const.js';
import {isList} from 'browser-sync/dist/utils';

const cardTemplate = document.querySelector('#card').template;
const getCard = (myObj) => {
  const card = cardTemplate.cloneNode(true);
  const title = card.querySelector('.title');
  const address = card.querySelector('.address');
  const price = card.querySelector('.price');
  const rooms = card.querySelector('.rooms');
  const features = card.querySelectorAll('.popup__features');
  title.innerText = myObj.title;
  address.innerText = myObj.address;
  price.innerText = myObj.price;
  Type.innerText = TypeResource[myObj.type];
  rooms.innerText = `${myObj.rooms} комнаты для ${myObj.guests} гостей`;
  features.innerText = myObj.features;
  for (let i = 0; i < features.length; i++) {
    const feature = document.createElement('li');
    feature.classList.add('feature', 'feature--' + features[i]);
    features.appendChild(feature);
  }
  return card;
};
getCard('');
