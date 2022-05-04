// 1 - Solicita un nombre, la edad y muestra por consola el mensaje
// "Hola ____, tienes ____ años y el año que viene tendrás ____
// años"
// Realiza el ejercicio con prompt(mensaje) y haz uso de los template
// strings.

// let nombre = prompt("Introduce el nombre");
// let edad = parseInt(prompt("Introduce la edad"));

// console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad + 1} años`);

// 2 - Escribe un programa que pueda calcular el área de 3 figuras
// geométricas, triángulo, rectángulo y círculo. En primer lugar
// pregunta de qué figura se quiere calcular el área, después solicita
// los datos que necesites para calcularlo.
// triángulo = b * h/2
// rectángulo = b * h
// círculo = π * r2 (pi * radio al cuadrado)

// let figuraGeometrica = prompt("Selecciona una figura geométrica (triángulo, rectángulo, círculo)");
// let base, altura, radio, area;

// if (figuraGeometrica.toLowerCase() === "triángulo" 
//     || figuraGeometrica.toLowerCase() === "triangulo") {
//         base = parseInt(prompt("Introduce la base"));
//         altura = parseInt(prompt("Introduce la altura"));
//         area = (base * altura) / 2;
//         console.log(`El área del triángulo es ${area}`);
// } else if (figuraGeometrica.toLowerCase() === "rectángulo"
//             || figuraGeometrica.toLowerCase() === "rectangulo") {
//         base = parseInt(prompt("Introduce la base"));
//         altura = parseInt(prompt("Introduce la altura"));
//         area = base * altura;
//         console.log(`El área del rectángulo es ${area}`);
// } else if (figuraGeometrica.toLowerCase() === "círculo"
//             || figuraGeometrica.toLowerCase() === "circulo") {
//         radio = parseInt(prompt("Introduce el radio"));
//         area = Math.PI * radio * radio;
//         console.log(`El área del círculo es ${area}`);
// } else {
//     console.log(`La figura ${figuraGeometrica} no es correcta`);
// }

// 3 - Solicita un número e imprime todos los números pares e
// impares desde 1 hasta ese número con el mensaje "es par" o "es
// impar"
// si el número es 5 el resultado será:
// 1 - es impar
// 2 - es par
// 3 - es impar
// 4 - es par
// 5 - es impar

// let numero;
// do {
//     numero = parseInt(prompt("Introduce un número positivo"));
// } while (numero < 1);

// for (let i = 1; i <= numero; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} - es par`);
//     } else {
//         console.log(`${i} - es impar`);
//     }
// }

// 4 - Escribe un programa que pida un número entero mayor que 1
// y que escriba si el número es primo o no.
// Un número primo es aquel que solo es divisible por sí mismo y
// la unidad

// let numero;
// do {
//     numero = parseInt(prompt("Introduce un número mayor que 1"));
// } while (numero <= 1);

// let esPrimo = true;
// let divisor = 2;

// while (esPrimo === true && divisor < numero) {
//     if (numero % divisor === 0) {
//         esPrimo = false;
//     } else {
//         divisor = divisor + 1;
//     }
// }

// if (esPrimo === true) {
//     console.log(`El número ${numero} es primo`);
// } else {
//     console.log(`El número ${numero} no es primo`);
// }

// 5 - Escriba un programa que pida un número entero mayor que
// cero y calcule su factorial.
// El factorial es el resultado de multiplicar ese número por sus
// anteriores hasta la unidad.

// !5 = 5*4*3*2*1 = 120

// let numeroPositivo;
// do {
//     numeroPositivo = parseInt(prompt("Introduce un número mayor que 0"));
// } while (numeroPositivo <= 0);

// let factorial = 1;
// for (let i = numeroPositivo; i > 1; i--) {
//     factorial = factorial * i;
// }

// console.log(`El factorial de ${numeroPositivo} es ${factorial}`);


// 6 - Escribe un programa que permita ir introduciendo una serie
// indeterminada de números mientras su suma no supere 50.
// Cuando esto ocurra, se debe mostrar el total acumulado y el
// contador de cuantos números se han introducido

// let sumaTotal = 0;
// let contadorNumeros = 0;

// while (sumaTotal <= 50) {
//     let numero = parseInt(prompt("Introduce un número"));
//     contadorNumeros = contadorNumeros + 1;
//     sumaTotal = sumaTotal + numero;
// }

// console.log(`Total acumulado: ${sumaTotal}`);
// console.log(`Se han introducido ${contadorNumeros} números`);

// 7 - Crea 3 arrays. El primero tendrá 5 números y el segundo se
// llamará pares y el tercero impares, ambos estarán vacíos. Después
// multiplica cada uno de los números del primer array por un
// número aleatorio entre 1 y 10, si el resultado es par guarda ese
// número en el array de pares y si es impar en el array de impares.
// Muestra por consola:
// -la multiplicación que se produce junto con su resultado con el
// formato 2 x 3 = 6
// -el array de pares e impares

// let primerArray = [3, 8, 1, 5, 4];
// let pares = [];
// let impares = [];

// for (let i = 0; i < primerArray.length; i++) {
//     let aleatorio = (Math.round(Math.random() * 9)) + 1;
//     let resultado = primerArray[i] * aleatorio;
//     if (resultado % 2 === 0) {
//         pares.push(resultado);
//     } else {
//         impares.push(resultado);
//     }
//     console.log(`${primerArray[i]} x ${aleatorio} = ${resultado}`);
// }

// console.log(`Array de pares: ${pares}`);
// console.log(`Array de impares: ${impares}`);

// 8 - Dado un array de letras, solicita un número de DNI y calcula
// que letra le corresponde. El número no puede ser negativo ni
// tener más de 8 dígitos. La posición de la letra es el resultado del
// módulo del número introducido entre 23.

// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
// 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//   do {
//        let numero = parseInt(prompt("Introduce un número de DNI sin letra"));
//  } while (numero < 0 || numero.toString().length > 8) {
//     
//   let posicion = numero % 23;
//   let letra = letras[posicion];
//   console.log(`Al número ${numero} le corresponde la letra ${letra}`);
// }

//9 - Solicitar al usuario una palabra y mostrar por consola el
//número de consonantes, vocales y longitud de la palabra.

// let palabra = prompt("Introduce una palabra");
// let consonantes = 0;
// let vocales = 0;

// for (let i = 0; i < palabra.length; i++) {
//     let letra = palabra.charCodeAt(i);
//     if (letra === 65 || letra === 69 || letra === 73 || letra === 79 || letra === 85
//         || letra === 97 || letra === 101 || letra === 105 || letra === 111 || letra === 117) {
//             vocales = vocales + 1;
//     } else if ((letra >= 65 && letra <= 90) || (letra >= 97 && letra <= 122)) {
//         consonantes = consonantes + 1;
//     }
// }
// console.log(`Consonantes: ${consonantes}`);
// console.log(`Vocales: ${vocales}`);
// console.log(`Longitud: ${palabra.length}`);

//10 - Dado un array que contiene ["azul", "amarillo", "rojo",
//"verde", "rosa"] determinar si un color introducido por el usuario
//a través de un prompt se encuentra dentro del array o no.

// let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
// let color = prompt("Selecciona un color");

// if (colores.includes(color.toLowerCase())) {
//     console.log(`El color ${color} se encuentra en el array`);
// } else {
//     console.log(`El color ${color} no se encuentra en el array`);
// }