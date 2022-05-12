/*1. Crea un fichero javascript y enlázalo al documento html proporcionado para que cuando se pulse
sobre el enlace se muestre completo el contenido de texto. Además, el enlace debe dejar de
mostrarse después de pulsarlo por primera vez.*/


window.onload = function seguirLeyendo(){
    document.getElementById("link").onclick = mostrarTexto;
}

function mostrarTexto(){
    var texto = document.getElementById("textoOculto");
    var enlace = document.getElementById("link");
    texto.style.display = "inline";
    enlace.style.display = "none";
}