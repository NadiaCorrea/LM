/*• Al introducir un nuevo elemento en el input y pulsar el botón Añadir elemento, este se añadirá a la lista. 
• Al pulsar el botón Borrar, se eliminará el primer elemento de la lista. */



function annadirElemento(){
    let texto =document.getElementById("nuevoElemento").value;
    let lista = document.getElementsByTagName("ul");
    let elemento = document.createElement("li");
    elemento.appendChild(texto);
    lista.appendChild(elemento);
}

