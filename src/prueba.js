
/* Implementa una función que dado un arreglo y un número n, 
divida el arreglo recibido en subarreglos de longitud máxima n.
El valor de retorno debe ser un arreglo donde cada elemento sea un subarreglo.
 Tendremos así un arreglo de arreglos.

 chunk([1, 2, 3, 4], 2) // --> [[1, 2], [3, 4]]

 */

/* argumentos: arreglo - n
función que divida el arreglo con un máx length "n"
debe retornar un arreglo de arreglos */

/* args: array, n
const arrayNumbers = [];
array.length
fx que retorne const arraySingle = [];
arrayNumbers.push(arraySingle)

debe iterarse hasta que el length de ese array sea igual a N y el resultado almacenarlo
 */
 /* const divisor = array.length/n;
    console.log(array.splice(0, n));
    console.log(array.splice(array.length/n-1, array.length)); */

const chunk = (array, n) => {
    const newArray = [];
    let arraySingleNumbers = [];
    
    array.forEach((el)=> {    
        if (arraySingleNumbers.length < n) {
            arraySingleNumbers.push(el);
        } else {
            newArray.push(arraySingleNumbers);
            arraySingleNumbers = [];
            arraySingleNumbers.push(el);
        }
    });
    newArray.push(arraySingleNumbers);
    return newArray;
};    

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));
/* const chunk = (array, n) => {
    const arrayNumbers = [];
   
    for (let i=0; i < n; i++) {
        console.log(n);
        const arraySingle = array[i];
        arrayNumbers.push(arraySingle);
        console.log('arraySingle', arraySingle);
    }
    
    console.log('arrayNumbers', arrayNumbers);
 } */





