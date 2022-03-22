"use strict";

const name = document.querySelector(".name");
name.value= "Sandra";

const button = document.querySelector(".button");
button.addEventListener("click", ()=> {
    console.log("Hola ${name}");
})

//Me falta poner el value al input, para que me pinte "Sandra" en la consola