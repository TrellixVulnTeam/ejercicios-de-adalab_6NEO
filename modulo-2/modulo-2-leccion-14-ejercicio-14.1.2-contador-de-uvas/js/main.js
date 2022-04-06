'use strict';

let counter = 0;

const counterAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter > 12) {
    time.innerHTML = '';
  }
};

setInterval(counterAndShowCounter, 1000);
