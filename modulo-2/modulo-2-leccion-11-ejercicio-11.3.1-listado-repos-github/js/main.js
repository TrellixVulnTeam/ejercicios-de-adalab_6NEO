'use strict';

const inputElement = document.querySelector('.js_input');
const btn = document.querySelector('.js_button');

function handleClikBtn() {
    fetch('https://api.github.com/orgs/Adalab')
    .then((response) => response.json())
    .then((data) => {
        let i = inputElement.value;
        i = data.message;
    })
}


btn.addEventListener('click', handleClikBtn);

// No me devuelve los datos de ese repositorio en github