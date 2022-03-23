"use strict";

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}

console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

// Si ponemos primero (mySecretLetter) devuelve las dos x, pero si ponemos por encima (secretLetter) imprime en la consola, primero "y" y despues "x"