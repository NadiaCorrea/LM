/*3. A partir del html proporcionado crear y enlazar el fichero javascript necesario para que al
introducir el nombre y los apellidos y pulsar en el botón, escriba en el div saludo: “Hola <nombre
y apellidos> bienvenido a esta página.”
saludo.html*/


window.onload = function recuperarInfo (){
    document.getElementById("saludar").onclick = saludar;
}

function saludar(){
    let nombre = document.getElementById("nombre").value;
    document.getElementById("nombre").value = "";
    let apellidos = document.getElementById("apellidos").value;
    document.getElementById("apellidos").value = "";
    let div = document.getElementById("saludo");
    let texto = `Hola ${nombre} ${apellidos} bienvenido a esta pagina.`;
    
    div.textContent = texto;
   
}

