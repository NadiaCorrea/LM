function anadir(){
    let nuevoTd1 = document.createElement("td");
    let nuevoTd2 = document.createElement("td");
    let nuevoTd3 = document.createElement("td");
    let nuevoTr = document.createElement("tr");

    let c1 = document.getElementById("c1").value;
    let c2 = document.getElementById("c2").value;
    let c3 = document.getElementById("c3").value;

    nuevoTd1.textContent = c1;
    nuevoTd2.textContent = c2;
    nuevoTd3.textContent = c3;

    /*nuevoTd1.createTextNode("c1");
    nuevoTd2.createTextNode("c2");
    nuevoTd3.createTextNode("c3");*/

    nuevoTr.appendChild(nuevoTd1);
    nuevoTr.appendChild(nuevoTd2);
    nuevoTr.appendChild(nuevoTd3);
    console.log(nuevoTr);

    let tabla = document.getElementById("tabla");
    tabla.appendChild(nuevoTr);
}



function borrar(){
    let filas = document.getElementsByTagName("tr");
    let elemento = prompt("Introduce el elemento a borrar").value;
    if(filas.length > 0){
        let elementoABorrar = filas[0];
        let tabla = document.getElementsByTagName("tabla");
        tabla.removeChild(elementoABorrar);
    } 
}

let elementos = document.getElementsByTagName("li");
if (elementos.length > 0){
    let primerElemento = elementos[0];
    let listaCompleta= document.getElementById("lista");
    listaCompleta.removeChild(primerElemento);


let tabla = document.getElementById("tabla");
console.log(tabla);

/*<button onclick="anadir()">Botón añadir</button>
    <button onclick="cambiar()">Cambiar</button>
    <button onclick="borrar()">Borrar</button>*/