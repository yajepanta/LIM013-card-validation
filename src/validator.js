const validator = {

  isValid: function (valorTarjeta) {
    
  //split trabaja con strings, devuelve cada substring en array.
  let numerosEnteros = valorTarjeta.split("");

  //declaro las variables que usaré más abajo.
  let sumaParesMayores = [];
  let paresMenores = [];
  let impares = [];
  let sumaTotal = [];

    //for crea un bucle donde se analiza la posicion de cada numero, segun el nro de digitos de numerosEnteros
  for (let i = 0; i < numerosEnteros.length; i++ ) {
     
    // Condicion 1: Cuando la posicion es par.
      if (i%2 === 0) {
        
      // Condicion 1.1: Si el numero de la posicion par es mayor a 9:
        if (numerosEnteros[i]*2 >= 9) {

        // Vuelvo a string el array, lo multiplico x 2, y vuelvo a dividirlo en arrays para sumarlos individualmente como numeros.
        let paresMayores = String(numerosEnteros[i]*2);
        paresMayores = paresMayores.split("");
        paresMayores = paresMayores.reduce((a, b) => {
              return parseInt(a) + parseInt(b);
          });

        // uso += para que se agregue a la variable declarada arriba, y no solo reemplace al nro. Se vuelve un string. (?)
        sumaParesMayores += paresMayores;

          }
        
      // Condicion 1.2: Si el numero de la posicion par es menor a 9, agregamos directamente el producto. Tb es un string (?)
        else {
            paresMenores += numerosEnteros[i] * 2;

          }        
        }

    // Condicion 2: si la posicion es impar, el numero pasa a ser almacenado directamente. Es un string.
      else {
          impares += numerosEnteros[i];
        }
 
    }

  // Sumatorias. 1. es un string, 2. se divide en arrays, 3. se convierte a numeros y se suma.
    sumaTotal += sumaParesMayores+paresMenores+impares;
    sumaTotal = sumaTotal.split("");
    sumaTotal = sumaTotal.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
      });
         

  // Condicion 3. Obtenemos un boolean.

    if ((sumaTotal % 10) == 0){
        return  true
        }
    else{
        return false
      }

  },

  maskify: function (valorTarjeta){

    // Constante 1: Los ultimos 4 numeros del value de la tarjeta.
    const seVe = valorTarjeta.slice(-4);

   // Declaracion de variables que seran usadas en el bucle. Un array y un string.
    let noSeVe = [];
    let union = "";

    // Bucle: Analiza todas las posiciones menos las 4 ultimas, y las reemplaza por #
    for (let i = 0; i < valorTarjeta.length-4; i++ ) {

      noSeVe[i] = "#";
    }

    // el metodo join me permite unir todos los elementos del array en un string, porque de otra manera no podia sumarlos, me salia un solo michi
    noSeVe = noSeVe.join('');

    // en la variable union, se concatenan todoslos elementos y retorna un string.
    union = noSeVe.concat(seVe);
    return union; 
    
  },
};



export default validator;

 //  var posiciones = [i]; 
     // va a filtrar las posiciones de los numeros pares e impares y almacenar valor 
       // var posicionPar = posiciones.filter(i => i%2 === 0);

   /*  convierte los strings a numbers, si no da positivo, retorna Nan. Si es NaN, indicar "numero incorrecto"
 switch (numerosIndividuales) {

    case Number:
    //Reverse the order of the elements in an array
    let numerosReves = numerosIndividuales.reverse();
    break; 
    default:
    document.getElementById("resultados").innerHTML = "Has ingresado caracteres incorrectos. Por favor, ingresa solo números.";
 }
 
        OPCION 1 Ubicar posicion dentro de un array. multiplicar los de posiciones impares por 2. 

           pares = getNthElement([numerosReves], (i%2 == 0) )

        multiplicar los de posiciones impares por 2

           for (let i = 0; i <= 9; i%2==0) {
             i*2;   
         }

         
  
         OPCION 2 filtrar posiciones pares e impares. el metodo filtrar debe estar asociado a una funcion.

        necesito obtener todas las posiciones pares
        function pares(numerosPosicionPar){
          return numerosPosicionPar*2;   
         }

          function impares(numerosReves) {
            return numerosReves%2 != 0;    
          }
       let numerosTotal = numerosEnteros[i== 0, i < numerosReves.lenght , i++];

        */

            //     var posicionImpar = posiciones.filter(i => i%2 != 0);
        
        
      
/*
          if ( numerosEnteros[i]*2 >= 9) {           
            sumaParesMayores = numerosPares.reduce((a, b) => parseInt(a) + parseInt(b));
          }
            else
           {
            sumaParesMenores = numerosPares.reduce((a, b) => parseInt(a) + parseInt(b));
           }
*/