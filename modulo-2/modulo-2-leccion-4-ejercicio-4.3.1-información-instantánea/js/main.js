"use strict";

const input = document.querySelector(".js-input");
const text = document.querySelector(".parragraph");

input.addEventListener("click", () => {
    text(event.currentTarget);
});

//Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.---- No conseguido