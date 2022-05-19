
window.onload = function iniciar() {
    document.getElementById("btnAnadir").onclick = anadir;
    document.getElementById("btnBorrar").onclick = borrar;
};

function anadir() {
    let nuevoElemento = document.getElementById("nuevoElemento").value;
    let posicionElementoString = document.getElementById("posicionElemento").value;
    let posicionElemento = parseInt(posicionElementoString);

    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = nuevoElemento;

    let ul = document.getElementById("listaCompra");
    let listaLi = ul.getElementsByTagName("li");
    let anteriorLi = listaLi[posicionElemento - 1];
    anteriorLi.before(nuevoLi);
}

function borrar() {
    let posicionElementoString = document.getElementById("posicionElemento").value;
    let posicionElemento = parseInt(posicionElementoString);

    let ul = document.getElementById("listaCompra");
    let listaLi = ul.getElementsByTagName("li");
    let liABorrar = listaLi[posicionElemento - 1];
    ul.removeChild(liABorrar);
}