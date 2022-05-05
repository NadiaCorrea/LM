/*3. Crea un array de 15 elementos numéricos que el usuario irá introduciendo. 
Al final, se tiene que mostrar qué número es el menor y en qué posición o posiciones 
del array está (no olvides que en el array la primera posición es la 0).  */

let array =[];
let i = 0;
let num; 
let menor = 9999999;// se debe usar el primer num en lugar de una variable externa 
do{
    num = parseInt(prompt("Introduce un número: "));
    if (num < menor){
        menor = num;
    }
    array.push(num);
    i = i + 1;
}while (i<=15); 

console.log (`El número menor es ${menor} y está en la posición o posiciones: `);

for(let j= 0; j < array.length; j = j +1){
    let posicion;
    if (array[j]  == menor){
        posicion = j;
        console.log (posicion);
    }
}



