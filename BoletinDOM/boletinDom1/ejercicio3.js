var provincias = [];

window.onload = function iniciar() {
    provincias.push('Sevilla');
    provincias.push('Cadiz');
    provincias.push('Huelva');
    provincias.push('Malaga');
    provincias.push('Granada');
    provincias.push('Almeria');
    provincias.push('Jaen');
    provincias.push('Cordoba');

    document.getElementById("btnOrdenar").onclick = ordenar;
}

function ordenar() {
    provincias.sort();

    let tabla = document.createElement("table");

    for (let i = 0; i < provincias.length; i = i + 1) {
        let fila = document.createElement("tr");
        let columna = document.createElement("td");
        columna.textContent = provincias[i];
        fila.appendChild(columna);
        tabla.appendChild(fila);
    }

    let content = document.getElementById("content");
    content.appendChild(tabla);
}