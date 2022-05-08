/*2.- Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.
Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el
usuario introduzca un texto.
Una vez cerrado el prompt el valor se añadirá como un nuevo <li> a la lista creada.
Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que cuando
pulses el primer botón borre el primer elemento de la lista y cuando pulses el último borre el
último elemento de la lista.
    <button onclick="delFirst">Borrar primer li</button>
    <button onclick="delLast">Borrar último li</button>
*/

function addElem(){
    let nuevoElemento = prompt("Introduce el elemnto a añadir:");
    let lista= document.getElementById("lista");
    let elemento = document.createElement("li");
    elemento.textContent = nuevoElemento;
    lista.appendChild(elemento);
}

function delFirst(){
    let elementos = document.getElementsByTagName("li");
    if (elementos.length > 0){
        let primerElemento = elementos[0];
        let listaCompleta= document.getElementById("lista");
        listaCompleta.removeChild(primerElemento);
    }
}

function delLast(){
    let elementos = document.getElementsByTagName("li");
    if (elementos.length > 0){
        let primerElemento = elementos[elementos.length -1];
        let listaCompleta= document.getElementById("lista");
        listaCompleta.removeChild(primerElemento);
    }
}