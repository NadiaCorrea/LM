/*2. A partir de la página web proporcionada, completar el código JavaScript para que:
◦ Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
◦ Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de
contenidos
◦ Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del
primer enlace
◦ Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
ocultaSeccion.html*/

var estado1 = false;
var estado2 = false;
var estado3 = false;


window.onload = function alCargar(){
    document.getElementById("primer").onclick = mostrarOcultar1;
    document.getElementById("segundo").onclick = mostrarOcultar2;
    document.getElementById("tercero").onclick = mostrarOcultar3;
}

function mostrarOcultarP(id, estado, enlace){
    let parrafo = document.getElementById(id);
    let link = document.getElementById(enlace);
    
    if(estado === false){
        parrafo.style.display = "none";
        link.textContent = "Mostrar contenidos"; 
        estado = true;
    } else{
        parrafo.style.display = "block";
        link.textContent = "Ocultar contenidos";
        estado = false;
    }
    return estado;
}

function mostrarOcultar1(){
    estado1 = mostrarOcultarP("primerP", estado1, "primer");
}

function mostrarOcultar2(){
    estado2 = mostrarOcultarP("segundoP", estado2, "segundo");
}

function mostrarOcultar3(){
    estado3 = mostrarOcultarP("tercerP", estado3, "tercero");   
}
