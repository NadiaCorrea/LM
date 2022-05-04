/* EJERCICIOS 
• Crea un objeto persona. Persona está compuesto por un campo nombre, edad, hijos. 
Hijos será un array con los siguientes valores “Batman”, “Ironman”, “Yoda”, “Hulk”. 
• Muestra por consola todos los nombres de los hijos. 
• Usando Template String muestra por consola el siguiente mensaje: 
“Hola nombre. Tienes XX años y tus hijos se llaman XXXX,XXXXX,XXXXX,XXXXXX */

/* const persona = {
    nombre : 'Thor', usar el promt 
    edad : '40', usar el promt 
    hijos : ['Batman','Ironman','Yoda', 'Hulk']
}

for(const key in persona){
    console.log (key);
}
console.log(persona.hijos);
console.log(`Hola ${persona.nombre} tienes ${persona.edad} años y tus hijos se llaman ${persona.hijos[0]},
${persona.hijos[1]}, ${persona.hijos[2]}, ${persona.hijos[4]}`); */

/* EJERCICIOS 
• Crea una función saludar que imprima por pantalla el texto “Hola desde una función”. 
Crea un bucle que llame 5 veces a la función saludar. 
• Crea una función saludarUsuario que reciba como parámetro el nombre de un usuario 
e imprima por pantalla el texto “Hola XXXXXXX desde una función”. 
• Crea una función suma que reciba 2 parámetros (num1,num2). Si num1 es igual a 3, 
realizara la suma de num1 y num2 y devolverá el resultado. En caso contrario devolverá el valor de num1. */

/* for(let i = 0; i < 5; i ++){
    saludar();
}

function saludar(){
    console.log('Hola desde una función');
}

let usuario = prompt("Introduce tu nombre");
saludarUsuario(usuario)

function saludarUsuario(nombre){
    console.log(`Hola ${nombre} desde una función`);
}

function suma(num1,num2){
    let resultado;
    if (num1 === 3){
        resultado = num1 + num2;
    } else {
        resultado = num1;
    }
    return resultado;
}

console.log(suma(2,3));
console.log(suma(3,2)); */