"use strict";

const text = document.querySelector(".text");

text.addEventListener("scroll", () =>{
    if (window.scrollY>150) {
        text.classList.add("pink");
    }
    if (window.scrollY<150) {
        text.classList.add("orange");
    }
}
);

//No se me cambia de color el texto al hacer el scroll