import validator from './validator.js';



const botonValidar = document.getElementById("botonValidar");

botonValidar.addEventListener("click", funcionValidar);

const resultados = document.getElementById("resultados");
const numeroTarjeta = document.getElementById("numeroTarjeta");

function funcionValidar(e) {

  e.preventDefault();

  const valorTarjeta = numeroTarjeta.value;

  let validacionTarjeta = validator.isValid(valorTarjeta);

  
  if (validacionTarjeta == true) {
    
    resultados.textContent = "Tu tarjeta es válida";
}  
else {
  resultados.textContent = "Tu tarjeta es inválida";
}

validator.maskify(valorTarjeta);

}
