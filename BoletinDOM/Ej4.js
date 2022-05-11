/*4.- Crea una aplicación que te permitirá generar tus propios formularios de manera dinámica.
Para ello dibuja una tabla de una sola fila y varias columnas. En cada columna habrá un botón
que realice lo siguiente:
1. Crear un input de tipo texto. Le preguntará al usuario mediante un prompt qué nombre
(atributo name) tiene el input.
2. Crear un input de tipo password. Le preguntará al usuario mediante un prompt qué
nombre (atributo name) tiene el input.
3. Crear un textarea. Le preguntará al usuario el nombre y generará automáticamente un
textarea de 40 columnas y 5 filas.
4. Crear un label. Preguntará al usuario a qué input va referido (atributo for).
5. Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).
6. Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value).
7. Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value).
8. Crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos name y
value).*/

function crearInputTexto(){
    let name = prompt("Introduce el nombre del input");
    let inputText = document.createElement("input");
    inputText.name = name;
    inputText.type = "text";

    let formulario = document.getElementById("formulario");
    formulario.appendChild(inputText);
}

function crearInputPassw(){
    let name = prompt("Introduce el nombre del input");
    let inputPass = document.createElement("input");
    inputPass.name = name;
    inputPass.type = "password"; 

    let formulario = document.getElementById("formulario");
    formulario.appendChild(inputPass);
}
// Le preguntará al usuario el nombre y generará automáticamente un
//textarea de 40 columnas y 5 filas.

function crearTextarea(){
    let name = prompt("Introduce el nombre del textarea");
    let area = document.createElement("textarea");
    area.name = name;
    area.rows = 5;
    area.cols = 40;

    let formulario = document.getElementById("formulario");
    formulario.appendChild(area);
}

function crearLabel(){
    let name = prompt("¿A qué input va referido?");
    let label = document.createElement("label");
    label.htmlFor = name;

    let formulario = document.getElementById("formulario");
    formulario.appendChild(label);
}

function crearImagen(){
    let ruta = prompt("Introduce la ruta");
    let imagen = document.createElement("img");
    imagen.src = ruta;

    let formulario = document.getElementById("formulario");
    formulario.appendChild(imagen);
}//https://labelbox.com/blog/content/images/2019/10/annotate-1.png


function crearCheckbox(){
    let name = prompt("Introduce el nombre");
    let valor = prompt("Introduce el valor");
    let check = document.createElement("input");
    check.type = "checkbox";
    check.name = name;
    check.value = valor;

    let formulario = document.getElementById("formulario");
    formulario.appendChild(check);
}

function crearRadio(){
    let name = prompt("Introduce el nombre");
    let valor = prompt("Introduce el valor");
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = valor;

    let formulario = document.getElementById("formulario");
    formulario.appendChild(radio);
}


function crearSubmit(){
    let name = prompt("Introduce el nombre");
    let valor = prompt("Introduce el valor");
    let submit = document.createElement("button");
    submit.type = "submit";
    submit.name = name;
    submit.value = valor;

    let formulario = document.getElementById("formulario");
    formulario.appendChild(submit);
}
/*
6. Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value).
7. Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value).
8. Crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos name y
value).*/