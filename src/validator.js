const validator = {

 isValid: function (valorTarjeta) {
    
  //split trabaja con strings, devuelve cada substring en array, reverse invierte la lista de elementos
  //quite .reverse()
  var numerosEnteros = valorTarjeta.split("");

  var sumaParesMayores = [];
  var paresMenores = [];
  var impares = [];
  let sumaTotal = [];
  //for crea un bucle donde se analiza la posicion de cada numero !pero no se está analizando la posicion!

       for (var i = 0; i < numerosEnteros.length; i++ ) {
      //  var posiciones = [i]; 
     // va a filtrar las posiciones de los numeros pares e impares y almacenar valor 
       // var posicionPar = posiciones.filter(i => i%2 === 0);

        if (i%2 === 0) {
        
          if (numerosEnteros[i]*2 >= 9) {

            //sumar cifras a y b. perfecto!

            var paresMayores = String(numerosEnteros[i]*2);

               paresMayores = paresMayores.split("");
      
           //Es un number.

            paresMayores = paresMayores.reduce((a, b) => {
              return parseInt(a) + parseInt(b);
          });

// agregue += para que se agregue, y no solo reemplace al nro. Es un string.
            sumaParesMayores += paresMayores;

          }
          
          else {

            // si no cumple que es mayor, se agrega directamente a la cadena, como string
            paresMenores += numerosEnteros[i] * 2;
            

          }
         
        }

        else {

          //me retorna string
          impares += numerosEnteros[i];

        }
 
          }

 // paresMayores = paresMayores.reduce((a, b) => {
 // return parseInt(a) + parseInt(b);});

         sumaTotal += sumaParesMayores+paresMenores+impares;

         sumaTotal = sumaTotal.split("");

         sumaTotal = sumaTotal.reduce((a, b) => {
          return parseInt(a) + parseInt(b);
      });

      if ((sumaTotal % 10) == 0){
        return true
        }
        else{
        return false
      };

    },


};


export default validator;


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