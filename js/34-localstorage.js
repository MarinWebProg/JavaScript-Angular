'use strict'

//LocalStorage
// localStorage.

//Comprobacion de disponibilidad de localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("Incompatible con LocalStorage");
}

//Guardar datos
localStorage.setItem("titulo","Prueba de guardado");

//Recuperar elemento
// console.log(localStorage.getItem("titulo"));
document.querySelector('#peliculas').innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario ={
    nombre : "John Doe",
    email : "johndoe@email.com",
    web : "jonhdoe.com"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#info").append(userjs.web+" - " +userjs.nombre);

//Para borrar los datos
// localStorage.removeItem("usuario");
localStorage.clear();