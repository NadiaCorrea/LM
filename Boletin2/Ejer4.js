/*4. Crea un script que tome una serie de palabras ingresadas por el usuario y almacene esas palabras en un array. 
Posteriormente, manipula ese array para mostrar una nueva ventana con los siguientes datos:  
 La primera palabra ingresada por el usuario.  
 La última palabra ingresada por el usuario.  
 El número de palabras presentes en el array.  
 Todas las palabras ordenadas alfabéticamente.*/

let palabras = [];
let cantidadPalabras = 4;
let palabra;

for (let i = 0; i < cantidadPalabras; i = i +1){
    palabra = prompt("Introduce una palabra: ");
    palabras.push(palabra);
}

let auxiliar = [];
auxiliar.push(palabras[0]);
auxiliar.push(palabras[palabras.length -1]);
auxiliar.push(palabras.length);
auxiliar.push(palabras.sort());

console.log(auxiliar)