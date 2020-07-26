import validator from './validator.js';



const botonValidar = document.getElementById("botonValidar");

botonValidar.addEventListener("click", funcionValidar);

const resultados = document.getElementById("resultados");
let numeroTarjeta = document.getElementById("numeroTarjeta");

function funcionValidar(e) {

 e.preventDefault();

  var valorTarjeta = numeroTarjeta.value;

  if (valorTarjeta == 0 ) {
    alert("Debe ingresar un número");
  }

  else if (valorTarjeta <= 1) {
    alert ("El número de la tarjeta debe tener 16 dígitos");
  }
  
else {

  let validacionTarjeta = validator.isValid(valorTarjeta);
  let union = validator.maskify(valorTarjeta);
  
  if (validacionTarjeta == true) {
    
    resultados.textContent = "Tu tarjeta es válida";
    
}  
else {
  resultados.textContent = "Tu tarjeta es inválida";
}



numeroTarjeta.value = `${union}`;

// numeroTarjeta.innerHTML = (" ");


  //function (){
   // numeroTarjeta.innerHTML +=`${union}`;
  //  }


 }
}
