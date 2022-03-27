'use strict';

//Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. 
//Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

const input1 = document.querySelector('.js-input1');
const input2 = document.querySelector('.js-input2');
const btn = document.querySelector('.button');


// Con esta función evitamos que se recargue la página cuando le damos al botón
// Esto lo conseguimos con el métedo preventDefault() sobre el evento del botón
function handle(event) {
    // Primero va a evitar que se recargue y despues guarda en una cosntante el valor de las peliculas que metemos en la lista, una vez guardada la movie list 
    event.preventDefault()
    const movieList = getMovies()
    console.log(movieList);
   for (const movie of movieList) {
       console.log(`A mi también me encantó ${movie}`);
   }
}

function getMovies() {
    //Aquí vamos a guardar la lista de las películas
    const movieList = []
    movieList.push(input1.value);
    movieList.push(input2.value);

    return movieList;
}

btn.addEventListener('click', handle)
