
window.onload = function iniciar() {
    document.getElementById("btnAplicar").onclick = aplicar;
};

function aplicar() {
    let posicionString = document.getElementById("posicion").value;
    let posicion = parseInt(posicionString);
    let equipo = document.getElementById("equipo").value;
    let puntos = document.getElementById("puntos").value;

    let tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    let fila = filas[posicion];
    
    let columnas = fila.getElementsByTagName("td");
    let colEquipo = columnas[1];
    let colPuntos = columnas[2];
    colEquipo.textContent = equipo;
    colPuntos.textContent = puntos;
}