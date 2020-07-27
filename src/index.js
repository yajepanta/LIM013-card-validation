import validator from './validator.js';



const botonValidar = document.getElementById("botonValidar");
botonValidar.addEventListener("click", funcionValidar);


const resultados = document.getElementById("resultados");
let numeroTarjeta = document.getElementById("numeroTarjeta");

const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", borrarNumero);


function borrarNumero () {

  numeroTarjeta.value = ` `;
}

function funcionValidar(e) {

 e.preventDefault();

  var valorTarjeta = numeroTarjeta.value;

  if (valorTarjeta == 0 ) {
    alert("Debe ingresar un número");
  }
  else if  (isNaN(valorTarjeta)) {
    alert ("Solo debes ingresar números");
  }
  else if ((valorTarjeta.length >= 1) && (valorTarjeta.length < 15)) {
    alert ("El número de la tarjeta debe tener 16 dígitos");
  }

  
  
else {

  let validacionTarjeta = validator.isValid(valorTarjeta);
  let union = validator.maskify(valorTarjeta);
  
  if (validacionTarjeta == true) {
    
    resultados.textContent = "Tu tarjeta es válida";
    numeroTarjeta.value = `${union}`;
}  
else {
  resultados.textContent = "Tu tarjeta es inválida";
}





// numeroTarjeta.innerHTML = (" ");


  //function (){
   // numeroTarjeta.innerHTML +=`${union}`;
  //  }


 }
}
