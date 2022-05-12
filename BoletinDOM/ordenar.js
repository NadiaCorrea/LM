/*4. A partir del html proporcionado crear y enlazar el fichero javascript necesario para que al
introducir una serie de números separados por comas y darle al botón ordenar los muestre
ordenados en el div ordenado.
ordenar.html*/

window.onload = function iniciar(){
    document.getElementById("ordenar").onclick = ordenar;
}

function ordenar(){

    let input = document.getElementById("numeros").value;
    document.getElementById("numeros").value = "";
    let arrayAux = input.split(",");
    let arraynum = [];
    for(let i = 0; i < arrayAux.length; i=i+1){
        let num = parseInt(arrayAux[i].trim());
        arraynum.push(num);
    }

    let ordenado = arraynum.sort();
    let div = document.getElementById("ordenado");

    div.textContent = ordenado;

}