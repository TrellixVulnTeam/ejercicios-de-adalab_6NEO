'use strict';

const inputElement = document.querySelector('.js_input');
const btn = document.querySelector('.js_button');
const resultElement = document.querySelector('#result');

function handleClikBtn() {
  let input = inputElement.value;
  fetch(`https://api.github.com/orgs/${input}`)
    .then((response) => response.json())
    .then((data) => {
      return fetch(data.repos_url);
    })
    .then((response) => response.json())
    .then((data) => {
      let list = '';
      for (const element of data) {
        list += `<li>${element.name}</li>`;
      }
      resultElement.innerHTML = list;
    });
}

btn.addEventListener('click', handleClikBtn);

// No me devuelve los datos de ese repositorio en github
