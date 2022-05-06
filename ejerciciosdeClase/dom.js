/*• Al introducir un nuevo elemento en el input y pulsar el botón Añadir elemento, este se añadirá a la lista. 
• Al pulsar el botón Borrar, se eliminará el primer elemento de la lista. */

function annadirElemento(){
    let texto = document.getElementById("nuevoElemento").value; //obtiene el valor del input
    let lista = document.getElementById("miLista");//obtiene ul
    let elemento = document.createElement("li");//crea li
    elemento.textContent = texto;//añade texto(String) al li
    lista.appendChild(elemento);
    document.getElementById("nuevoElemento").value ="";// para que deje a vacío el input 
}

function borrarElemento(){
    let listaCompleta = document.getElementById("miLista"); //obtiene lista completa ul- devuelve un nodo 
    //console.log(listaCompleta);
    let elementos = listaCompleta.getElementsByTagName("li");//obtiene los elementos de la lista 
    //console.log(elementos);
    let elementoABorrar = elementos[0];// obtiene el primer elemento del array
    //console.log(elementoABorrar);
    listaCompleta.removeChild(elementoABorrar); // elimina el elemento
}