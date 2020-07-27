import validator from './validator.js';

const botonValidar = document.getElementById("botonValidar");
botonValidar.addEventListener("click", funcionValidar);


const resultados = document.getElementById("resultados");
let numeroTarjeta = document.getElementById("numeroTarjeta");

const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", borrarNumero);

// Reemplaza el value por un string vacio.
function borrarNumero () {
  numeroTarjeta.value = ` `;
}

function funcionValidar(e) {

 e.preventDefault();

  var valorTarjeta = numeroTarjeta.value;
//VER SI USAR SWITCH

  //Condicion 1: Si el valor ingresado es 0
  if (valorTarjeta == 0 ) {
    alert("Debe ingresar un número");
  }

  //Condicion 2: Si el valor ingresado es Nan
      else if  (isNaN(valorTarjeta)) {
    alert ("Solo debes ingresar números");
  }

  //Condicion 3: Si tiene mas de 1 y menos de 15 digitos
      else if ((valorTarjeta.length >= 1) && (valorTarjeta.length < 15)) {
    alert ("El número de la tarjeta debe tener 16 dígitos");
  }

  //Condicion 4: En los demas casos
  else {

  let validacionTarjeta = validator.isValid(valorTarjeta);
  let union = validator.maskify(valorTarjeta);
  
    //Condicion 4.1
      if (validacionTarjeta == true) {
    
    resultados.textContent = "Tu tarjeta es válida";
    numeroTarjeta.value = `${union}`;
      }  

    // Condicion 4.2
      else {
  resultados.textContent = "Tu tarjeta es inválida";
      }





// numeroTarjeta.innerHTML = (" ");


  //function (){
   // numeroTarjeta.innerHTML +=`${union}`;
  //  }


 }
}
