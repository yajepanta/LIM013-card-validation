import validator from './validator.js';

// SECCIÓN 1: DATOS

const botonContinuar = document.getElementById("botonContinuar");
const seccionValidacion = document.getElementById("validacion");
const seccionDatos = document.getElementById("datos");
botonContinuar.addEventListener("click", siguientePagina);

function siguientePagina (a) {
  a.preventDefault();
  var nombre = document.getElementById("nombre");
  let apellidos = document.getElementById("apellidos");
  let direccion = document.getElementById("direccion");
if (nombre.value == "" ) {
  nombre.classList.add("incompleto");
  nombre.placeholder= "Dato obligatorio";
}

else if (apellidos.value == "" ) {
  apellidos.classList.add("incompleto");
  apellidos.placeholder= "Dato obligatorio";
}

else if (direccion.value == "" ) {
  direccion.classList.add("incompleto");
  direccion.placeholder= "Dato obligatorio";
}

else {
  
seccionValidacion.classList.remove("ocultar");
seccionDatos.classList.add("ocultar");
document.getElementsByTagName("div")[0].classList.remove("resaltado");
document.getElementsByTagName("div")[1].classList.add("resaltado");


document.getElementsByTagName("p")[4].textContent = `Para continuar con el proceso de compra, ${nombre.value}, debemos validar el número de tu tarjeta. \
Por favor, ingrésalo en la casilla.`;


document.getElementById("encima").innerHTML =  `${nombre.value.toUpperCase()}   ${apellidos.value.toUpperCase()} `;


}

}
// SECCIÓN 2: VALIDACIÓN
const botonValidar = document.getElementById("botonValidar");
botonValidar.addEventListener("click", funcionValidar);

let resultados = document.getElementById("resultados");
var numeroTarjeta = document.getElementById("numeroTarjeta");

let botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", borrarNumero);

// Reemplaza el value por un string vacio.
function borrarNumero (b) {
  b.preventDefault();
  numeroTarjeta.value = ` `;
  resultados.textContent = "";
}


numeroTarjeta.addEventListener("keyup", actualizarNumero);
function actualizarNumero(){

/* let value2 = document.getElementById("numeroTarjeta").value; */
document.getElementById("encima2").innerHTML =` ${numeroTarjeta.value} ` ;

 /* encima2.innerHTML = ` ${value2} `; */
}

function funcionValidar(e) {

 e.preventDefault();

  var valorTarjeta = numeroTarjeta.value;
//VER SI USAR SWITCH

  //Condicion 1: Si el valor ingresado es 0
  if (valorTarjeta == 0 ) {
    resultados.textContent = "Debe ingresar un número";
  }

  //Condicion 2: Si el valor ingresado es Nan
      else if  (isNaN(valorTarjeta)) {
   resultados.textContent = "Solo debes ingresar números"; 
 
  }

  //Condicion 3: Si tiene mas de 1 y menos de 15 digitos
      else if ((valorTarjeta.length >= 1) && (valorTarjeta.length < 15)) {
    resultados.textContent = "El número de la tarjeta debe tener 16 dígitos";
  }

  //Condicion 4: En los demas casos
  else {

  let validacionTarjeta = validator.isValid(valorTarjeta);
  let union = validator.maskify(valorTarjeta);
  
    //Condicion 4.1
      if (validacionTarjeta == true) {
    
    resultados.textContent = "Tu tarjeta es válida";
    numeroTarjeta.value = `${union}`;
    botonValidar.textContent = "CONTINUAR";
      }  

    // Condicion 4.2
      else {
  resultados.textContent = "Tu tarjeta es inválida";
      }

 }
}
