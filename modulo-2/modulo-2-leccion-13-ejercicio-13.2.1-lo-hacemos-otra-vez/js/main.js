'use strict';

const numbers = [1, 2, 3];

// creamos un elemento nuevo, un li
const newItem1 = document.createElement('li');
const newItem2 = document.createElement('li');
const newItem3 = document.createElement('li');

// Creamos el contenido para los li
const newContent1 = document.createTextNode('1');
const newContent2 = document.createTextNode('2');
const newContent3 = document.createTextNode('3');

// Le añadimos el contenido al li
newItem1.appendChild(newContent1);
newItem2.appendChild(newContent2);
newItem3.appendChild(newContent3);

console.log(newItem1);
console.log(newItem2);
console.log(newItem3);
