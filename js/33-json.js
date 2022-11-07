'use strict'

//Json - JavaScript Object Notation
//No hay array asociativo
var pelicula = {
    titulo: "Una pelicula",
    year: 2022,
    pais: "Mexico"
};

var peliculas =[
    {titulo:"Otra pelicula", year:2022, pais:"Mexico"},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - "+ peliculas[index].year);
    caja_peliculas.append(p)
};