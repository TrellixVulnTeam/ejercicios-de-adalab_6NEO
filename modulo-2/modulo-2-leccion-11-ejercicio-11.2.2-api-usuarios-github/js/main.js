'use strict';


const btn = document.querySelector('.js_button');
const inputElement = document.querySelector('.js_input');
const nameElement = document.getElementById('name');
const photoElement = document.getElementById('photo');
const reposElement = document.getElementById('repos');

function handleClickBtnLookFor() {
    let username = inputElement.value;
    fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
        nameElement.innerHTML = data.name;
        photoElement.src = data.avatar_url;
        reposElement.innerHTML = data.public_repos;
    });
}

btn.addEventListener('click', handleClickBtnLookFor);

// Da error la url al poner{username}
//la linea 13 no funciona