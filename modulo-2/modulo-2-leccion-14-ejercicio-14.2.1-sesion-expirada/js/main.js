'use strict';

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const message = document.querySelector('.msg');
  message.innerHTML = '';
  if (counter > 15) {
    message.innerHTML = 'Su sesión ha expirado';
  }
};

temp = setInterval(incrementAndShowCounter, 1000);
