// // numero = 54;
// // No se puede inicializar antes de declararla
// console.log ("Ejercicio 1")

// let numero = -4;
// let palabra = 'Hola Mundo';
// let respuesta = true;
// const PI = 3.14;

// numero = 54;
// // PI = 3.1415; 
// // no deja cambiar el valor ya qu es una constante

// console.log(numero);
// console.log(palabra);
// console.log(respuesta);
// console.log(PI);

// console.log ("Ejercicio 2")

// let num1 = 5;
// let num2 = 2; 
// //no lo quiere así 
// let suma = num1 + num2;
// let resta = num1 - num2; 
// let multiplicacion = num1 * num2; 
// let division = num1/num2; 
// let modulo = num1%num2; 
// let nombre = 'Nadia'; 
// let texto = 'Hola ' + nombre;

// console.log (suma);
// console.log (resta);
// console.log (multiplicacion);
// console.log (division);
// console.log (modulo);
// console.log (texto);

// console.log ("Ejercicio 3")

// let a = 5;
// console.log(a);
// console.log(a++); //pos-incremento lo aumenta la siguiente vez que se usa la variable
// console.log(a);

// console.log(++a); //incrementa antes 

// console.log(a);
// console.log(a--);
// console.log(a);

// console.log(--a);

// // Utiliza los operadores de asignación para sumar 3
// // a la variable a y muéstrala por consola. Al resultado obtenido réstale 3 y muéstralo por pantalla.

// console.log(a=+3);
// console.log(a=-3);


// console.log ("Ejercicio 4")

// let cadena = "Hola Mundo";

// console.log(cadena.length);
// console.log(cadena.toUpperCase());
// console.log(cadena.toLowerCase());
// console.log(cadena.indexOf('o'));
// console.log(cadena.indexOf("Hola"));
// console.log(cadena.replace("Mundo","Youtube"));

// cadena = cadena.replace("Mundo","Youtube");
// console.log(cadena);

// console.log(cadena.startsWith('h'));
// console.log(cadena.startsWith('H'));

// console.log('r'.repeat(10));

// let name='Nadia', apellido='Correa', edad=20;
// console.log(`Nombre:${name}, Apellido:${apellido}, Edad:${edad}`);

// console.log ("Ejercicio 5")

// console.log(Math.round(Math.random()*100));
// console.log(Math.PI);
// console.log(Math.round((Math.random()*(10-5)+5)));
// console.log(Math.sign(-5));
// console.log(Math.sign(5));
// console.log(Math.sign(0));


// console.log ("Ejercicio 6")
// let x1 = true;
// let x2 = false; 
// let x3 = new Date();
// let x4 = "999";
// let x5 = "999 888";

// let n = Number(x1) + "<br>" + Number(x2) + "<br>" + Number(x3) + "<br>"+ Number(x4) + "<br>" + Number(x5);
// // document.getElementById("demo").innerHTML = n;
// console.log(n);

// console.log ("Ejercicios Condicionales")

// console.log("EjerCon 1")

// let num = 0; 

// if(num < 0) {
//     console.log(`${num} es menor que 0.`)
// }
// else if(num > 0){
//     console.log(`${num} es mayor que 0.`)
// }
// else {
//     console.log(`${num} es igual que 0.`)
// }


// console.log("EjeCon 2")

// let numUno = 5;
// let numDos = 1;

// if (numUno > 0 && numDos > 0) console.log(`${numUno} y ${numDos} son mayores que 0.`)

// console.log("EjeCon 3")

// let cadena1="Na"; 

// if (cadena1.length > 4) {
//     console.log(`${cadena1} tiene más de 4 letras.`)
// }
// else if (cadena1.length < 4) {
//     console.log(`${cadena1} tiene menos de 4 letras.`)
// }
// else {
//     console.log(`${cadena1} tiene 4 letras.`)
// }


// console.log("EjeCon 4") arreglar

// let numero1 = parseInt(prompt("Introduce el primer número: "));
// let numero2 = parseInt(prompt("Introduce el segundo número: "));
// let numero3 = parseInt(prompt("Introduce el tercer número: "));

// let menor = -9999;
// if (numero1 < menor){

// }

// console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`); 


//ejercicio operador ternario
// let num = parseInt(prompt("Introduce un número: "));
// let result;

// (num%2===0)? 
// (result = "El número es par")
// : 
// (result = "El número es impar");

// document.getElementById("muestra").innerHTML = result;

//ejercicio arrays

// let array =[1,2,3,4,5];

// console.log(array.indexOf(4));
// let a = parseInt(array.slice(1,2)) ; 
// let b = parseInt(array.slice(2,3));

// console.log(a + b);

// let arrayCadenas= ['Hola','hola', 'kjk', 'kguk'];

// let palabra = arrayCadenas[1];

// console.log(`${palabra} tiene ${palabra.length} letras`);

//ejercicio arrays y métodos

// let numbers =[1,2,3,4,5,6];

// console.log(numbers.length);

// let number = 4;

// console.log(Array.isArray(number));
// console.log(Array.isArray(numbers));

// let borrado = numbers.shift();
// console.log(borrado);
// console.log(numbers);

// let delUlt= numbers.pop();
// console.log(delUlt);
// console.log(numbers);

// numbers.unshift(delUlt);
// console.log(numbers);

// numbers.reverse();
// console.log(numbers.join (' '));

// numbers.splice(2,2,10,23,54);
// console.log(numbers);

// numbers.splice(2,0,12,14);
// console.log(numbers);

//1 - Solicita un nombre, la edad y muestra por consola el mensaje 
//"Hola  ____,  tienes  ____  años  y  el  año  que  viene  tendrás  ____ años" 
//Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings. 


let nombre = prompt('Introduce tu nombre: ');
let edad = parseInt(prompt('Introduce tu edad: '));

console.log(`Hola ${nombre}, tienes ${edad} años y el año que vienes tendrás ${edad + 1} años.`)

// 2 - Escribe  un  programa  que  pueda  calcular  el  área  de  
// 3  figuras geométricas,  triángulo,  rectángulo  y  círculo.  
// En  primer  lugar pregunta de qué figura se quiere calcular el área, 
// después solicita los datos que necesites para calcularlo. 
// triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado) 


let figura = prompt('¿De qué figura quieres calcular el área? Triángulo, rectángulo o círculo: ');
let area;
let base;
let altura;
if (figura.toLowerCase() === 'triángulo' || figura.toLowerCase() === 'triangulo' ){
    base = parseInt(prompt('Introduce la base: '));
    altura = parseInt (prompt('Introduce la altura: '));
    area = (base * altura)/2;
} else if (figura.toLowerCase() === 'rectángulo' || figura.toLowerCase() === 'rectangulo'){
    base = parseInt (prompt('Introduce la base: '));
    altura = parseInt (prompt('Introduce la altura: '));
    area = base * altura;
} else if (figura.toLowerCase() === 'círculo' || figura.toLowerCase() === 'circulo'){
    let radio = parseInt(prompt('Introduce el radio: '));
    area = Math.PI * radio;
} else {
    console.log('Error. Los datos introducidos no son correctos.')
}
console.log(`El área del ${figura} es ${area}.`);



