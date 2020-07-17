import validator from './validator.js';

console.log(validator);

let botonValidar = document.getElementById("botonValidar");

botonValidar.addEventListener("click", funcionValidar);

function funcionValidar() {
  alert("Es válido");
}