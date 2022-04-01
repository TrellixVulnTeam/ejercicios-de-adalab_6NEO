'use strict';


const btn = document.querySelector('.js_button');
const inputElement = document.querySelector('.js_input');


function handleClickBtnLookFor() {
    fetch('https://api.github.com/users/{username}')
    .then((response) => response.json())
    .then((data) => {
       const username = inputElement.value;
       username = data.result;
    });
}

btn.addEventListener('click', handleClickBtnLookFor);

// Da error la url al poner{username}
//la linea 13 no funciona