window.onload = function iniciar() {
    document.getElementById('orden').onclick = ordenar;
}

var provincias = ['Sevilla', 'Cadiz', 'Huelva', 'Malaga', 'Granada', 'Almería', 'Jaen', 'Cordoba'];

function ordenar(){
    provincias.sort();

    let tabla = document.createElement('table');

    for (let i = 0; i < provincias.length; i = i + 1) {
        let fila = document.createElement("tr");
        let columna = document.createElement("td");
        columna.textContent = provincias[i];
        fila.appendChild(columna);
        tabla.appendChild(fila);
    }

    let mensaje = document.getElementById("mensaje");
    mensaje.appendChild(tabla)

}