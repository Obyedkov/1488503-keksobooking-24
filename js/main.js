const author =
  {
    avatar: 'img/avatars/user{{01}}.png',
    avatar: 'img/avatars/user{{02}}.png',
    avatar: 'img/avatars/user{{03}}.png',
    avatar: 'img/avatars/user{{04}}.png',
    avatar: 'img/avatars/user{{05}}.png',
    avatar: 'img/avatars/user{{06}}.png',
    avatar: 'img/avatars/user{{07}}.png',
    avatar: 'img/avatars/user{{08}}.png',
    avatar: 'img/avatars/user{{09}}.png',
    avatar: 'img/avatars/user{{10}}.png',
  }
;
for (let key in author) {
  alert(author[key]);
}
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

function getRandomItem(types) {
  return types[Math.floor(Math.random() * types.length)];
}

const offer = {
  title: 'Не понятно что придумать',
  address: '{{location.lat}}, {{location.lng}}',
  price: Math.random(),
  type: getRandomItem(types),
  rooms: Math.random(),
  guests: Math.random(),
  checkin: '',
  checkout: '',
  features: [],
  description: 'Описание помещение',
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};
const location = {
  lat: function (min, max) {
    min = 35.65000;
    max = 35.70000;
    return Math.random() * (max - min) + min;
  },
  lng: function (min, max) {
    min = 139.70000;
    max = 139.80000;
  }
};

