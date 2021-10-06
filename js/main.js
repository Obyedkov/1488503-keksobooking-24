function getRandomNumber(min, max) {
  let rand = Math.floor(min + (Math.random() * max));
  return rand.toFixed(2);
}

console.log(getRandomNumber(1, 20.99));


//Случайное целое число от min до max
//https://learn.javascript.ru/task/random-int-min-max
