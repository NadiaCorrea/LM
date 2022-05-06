/*1.-Introduce en el apartado de script el código necesario para extraer:
§ El número de párrafos de la página.
§ El texto del segundo párrafo.
§ El número de enlaces de la página.
§ La dirección del primer enlace.
§ La dirección del penúltimo enlace.
§ El número de enlaces del primer párrafo.
Para agregar texto en la página deberás introducir una etiqueta div con el id=info y añadir en
ella toda la información detallada mediante:
Var info=document.getElementById(“info”);
Info.innerHTML = “Texto informativo”;*/

let parrafos = document.getElementsByTagName("p");
let totalP = parrafos.length; //El número de párrafos de la página.
let segundoP = parrafos[1]; //El texto del segundo párrafo.
console.log(parrafos);
console.log(totalP);
console.log(segundoP);
let enlaces = document.getElementsByTagName("a");
let totalAref= enlaces.length;//El número de enlaces de la página.
console.log(totalAref);
let primerEnlace = enlaces[0].childNodes;//La dirección del primer enlace.
console.log(primerEnlace);
let ultimoEnlace = enlaces[enlaces.length-2].childNodes;//La dirección del penúltimo enlace.
console.log(ultimoEnlace);
//let primerP = 
//El número de enlaces del primer párrafo.