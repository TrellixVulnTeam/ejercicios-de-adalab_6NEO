"use strict";

// // OPCION 1

// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.

// Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.


const adalaber1 = {}

    adalaber1.name = "Susana",
    adalaber1.age = 34,
    adalaber1.job = "Journalist",
    adalaber1.speak = (phrase) => `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`,
    run = (console.log("Estoy corriendo")),


console.log(adalaber1.speak("Susana", "34", "journalist"));



// OPCION 2
const adalaber2 = {};

adalaber2.name ="Rocío",
adalaber2.age = "25",
adalaber2.job = "actrice",
adalaber2.speak = (phrase) => `Mi nombre es ${phrase}`,

console.log(adalaber2.speak("Rocío, tengo 25 años y soy actriz"));