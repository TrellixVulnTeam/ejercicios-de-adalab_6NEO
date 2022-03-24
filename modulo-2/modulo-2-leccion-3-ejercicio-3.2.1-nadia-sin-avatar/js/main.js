"use strict";


const avatarImage = document.querySelector('.js_image');

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";

// avatar que eligió el usuario al registrarse
const userAvatar = "http://www.fillmurray.com/300/300";


// innerHTML nunca se usa con un input y img

// console.log(avatarImage.src)-- muestra en la consola el src de imagen

avatarImage.src = userAvatar;

if ( userAvatar === '') {
    // Poner el avatar por defecto
avatarImage.src = DEFAULT_AVATAR;
} else {
// Poner el avatar de la usuaria
avatarImage.src = userAvatar;
}

/* OPCION 2 - CON TERNARIO
avatarImage.src = userAvatar === '' ? DEFAULT_AVATAR : userAvatar; */

/* 
avatarImage.setAtrivute('src', userAvatar || DEFAULT_AVATAR); */