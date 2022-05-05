/*2. Crea una función que acepta las notas de los tres trimestres de un alumno. 
Devolverá “aprobado” o “suspenso” en función de si el promedio de las notas es igual o superior a 5 o no lo es. 
A continuación de ello, se mostrará cuándo fue modificado por última vez el documento actual.*/

function mediaAritmetica(arg1, arg2, arg3){
    let media = (arg1 + arg2 + arg3) /3;
    return (media); 
}

function notas(trim1, trim2, trim3){
    let media = mediaAritmetica(trim1,trim2,trim3);
    let result;
    const fecha = new Date();

    if (media >= 5){
        result = "Aprobado";
    }else {
        result = "suspenso";
    }

    let hoy = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    console.log (`${result} última modificación ${hoy}`);
}

notas(6,7,9);
notas(2,5,3);