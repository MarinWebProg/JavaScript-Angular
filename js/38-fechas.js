var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var textoHora = `
    El año es ${year}
    El mes es ${mes}
    El dia es ${dia}
    La hora es ${hora}
`;
console.log(textoHora);

//Matematicas
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.random()*10);