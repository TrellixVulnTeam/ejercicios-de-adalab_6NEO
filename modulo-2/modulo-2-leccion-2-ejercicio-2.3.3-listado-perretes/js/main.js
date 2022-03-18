"use strict";

const dogList = document.querySelector(".dog_list");


const firstDog = document.querySelector(".first_dog");
const firstDogImage =
"https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";


const secondDog = document.querySelector(".second_dog");
const secondDogImage =
"https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";


const thirdDog = document.querySelector(".third_dog");
const thirdDogImage =
"https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

firstDog.innerHTML = (`${firstDogImage} ${firstDogName}`);
secondDog.innerHTML = (`${secondDogImage} ${secondDogName}`);
thirdDog.innerHTML = (`${thirdDogImage} ${thirdDogName}`);
