"use strict";


function getEl( selector ) {
// codigo que va a hacer mi funcion

const element = document.querySelector(selector);

// Esto forma parte de otro ejercicio
// if( element === null) {
//     console.log(`No existe ningun elemento ${selector}`);
// }
return element;
}


// function getEl( selector ) {
// // codigo que va a hacer mi funcion
// // Esto forma parte de otro ejercicio

//     if( selector.includes('.') {
//     const element = document.querySelector(selector);
//     return element;
//     } 
//     else {
//     console.log('Se te ha olvidado el punto');
    
//     return null
//     }
// }

//const title = document.querySelector('.js_title');

const title = getEl('.title');
console.log(title);

const paragraph = getEl('.paragraph');
console.log(paragraph);

