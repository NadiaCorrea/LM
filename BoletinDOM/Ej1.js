/*1.-Introduce en el apartado de script el código necesario para extraer:
§ El número de párrafos de la página.
§ El texto del segundo párrafo.
§ El número de enlaces de la página.
§ La dirección del primer enlace.
§ La dirección del penúltimo enlace.
§ El número de enlaces del primer párrafo.
*/

let parrafos = document.getElementsByTagName("p");
let totalP = parrafos.length; //El número de párrafos de la página.
let segundoP = parrafos[1].textContent; //El texto del segundo párrafo.
//console.log(parrafos);
//console.log(totalP);
//console.log(segundoP);
let enlaces = document.getElementsByTagName("a");
let totalAref= enlaces.length;//El número de enlaces de la página.
//console.log(totalAref);
let primerEnlace = enlaces[0].href;//La dirección del primer enlace.
//console.log(primerEnlace);
let ultimoEnlace = enlaces[enlaces.length-2].href;//La dirección del penúltimo enlace.
//console.log(ultimoEnlace);
let primerP = parrafos[0];
let enlaces1P = primerP.getElementsByTagName("a");
let totalEnlaces1P = enlaces1P.length; //El número de enlaces del primer párrafo.
//console.log(totalEnlaces1P);

/*Para agregar texto en la página deberás introducir una etiqueta div con el id=info y añadir en
ella toda la información detallada mediante:
Var info=document.getElementById(“info”);
Info.innerHTML = “Texto informativo”;*/

let nuevoDiv = document.createElement('div');
nuevoDiv.id = "info";
document.body.appendChild(nuevoDiv);

let info=document.getElementById("info");
console.log(info);

info.innerHTML = `<p> El número de párrafos de la página: ${totalP} <br>
El texto del segundo párrafo: ${segundoP} <br>
El número de enlaces de la página: ${totalAref} <br>
La dirección del primer enlace: ${primerEnlace} <br>
La dirección del penúltimo enlace: ${ultimoEnlace} <br>
El número de enlaces del primer párrafo: ${totalEnlaces1P}</p>`





