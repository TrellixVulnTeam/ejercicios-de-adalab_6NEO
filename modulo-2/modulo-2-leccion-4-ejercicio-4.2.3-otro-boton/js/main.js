"use strict";

const but = document.querySelector(".button");

but.addEventListener("click", toggle);

function toggle () {
    console.log(but);
    but.classList.toggle("button")
}

//Cuando le clickas en el boton que le quitan las clases, y cuando vuelves a clicar en el botón, se le vuelven a poner