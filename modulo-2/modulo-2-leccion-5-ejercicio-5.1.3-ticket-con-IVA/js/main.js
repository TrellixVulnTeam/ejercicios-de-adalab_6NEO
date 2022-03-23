"use strict";

function price(a){
 const result = (a * 2.1);

 return result;
}

price = 10;
const totalPrice = "Precio sin Iva: 10, IVA: 2,1 y total: ${total}";

console.log("Precio sin IVA: ${price}, IVA: 2.1 y total ${result}");

//Debería pintar en la consola el resultado de la variable "totalPrice"