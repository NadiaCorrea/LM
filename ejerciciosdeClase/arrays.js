/*
• Convierte la cadena “Hola Mundo” en un array. Existen 2 métodos que permiten hacerlo. 
Hazlo con cada uno de ellos y asigna el resultado a 2 variables distintas.*/

let frase = "Hola Mundo";
let array1 = [];
let array2 = [];

for(let i = 0; i < frase.length; i = i +1){
    if (frase.charAt(i) != " "){
        array1.push(frase.charAt(i));
    }
}
console.log(array1);

array2 = Array.from(frase);
console.log(array2);

/*• Crea un array que contenga las letras b,c,z,a. Muestra por consola el array ordenado. */

let letras = ['b', 'c', 'z', 'a'];

console.log(letras.sort()); 

/*• Crea un array que contenga los valores 1,8,100,300,3.
 Utilizando el mismo método anterior, muestra por consola el array ordenado. ¿Qué pasa? ¿por qué crees que es?. */

let numbers = [1,8,100,300,3]; // necesita una funcion que coge el unicode
console.log(numbers.sort());
let numbers2 = [1,8,100,300,3];
console.log(numbers.sort((a,b)=>a-b)); //orden ascendente si lo queremos en orden descendente b - a

 /*• Crea un array de objetos de usuario. Concretamente serán 6 objetos.
  Los objetos estarán compuestos por name y por online. 
  Online será true o false indicando si el usuario está online o no. 
  Utilizando reduce, obtén en número de usuarios que están en línea.*/

class Usuario{
    constructor(name, online){
        this.name = name;
        this.online = online;

        this.datos = `${this.name} ${this.online}`;
    }
}

let usuarios = [];
let us1 = new Usuario('Jhon',true);
let us2 = new Usuario('Pete', true);
let us3 = new Usuario('Maria', false);
let us4 = new Usuario('Juan', false);
let us5 = new Usuario('Pilar', false);
let us6 = new Usuario('Paco', true);

usuarios.push(us1);
usuarios.push(us2);
usuarios.push(us3);
usuarios.push(us4);
usuarios.push(us5);
usuarios.push(us6);
console.log(usuarios);

function contarOnline(contador, usuario) {
    if (usuario.online === true) {
        contador += 1;
    }

    return contador;
}

let aux = usuarios.reduce(contarOnline, 0);
console.log(aux);

let aux2 = usuarios.reduce((contador, usuario) => {
    if (usuario.online === true) {
        contador += 1;
    }

    return contador;
}, 0);
console.log(aux2);
