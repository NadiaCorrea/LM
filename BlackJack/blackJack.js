/* Te dan cartas, tienes que llegar al 21. Si te pasas pierdes.
* Si no te pasas se comprueba
*/

/*dos jugarores gamer y dealer*/
let dealer;
let gamer;

let bienvenida = "¡Vamos a jugar al Black Jack!";
document.getElementById("mensajeBienvenida").innerHTML = bienvenida;
document.getElementById("volver").style.display="none";

let cartaAleatoria;
let paloAleatorio;
let palos=["corazones","treboles","diamantes","picas"]
let cartasMostradas = [];
let cartaPalo;
let opcion;
let sumaCartasGamer = 0;
let sumaCartasDealer = 0;

/*GAMER: Primero se le da una carta (1-10) y un palo alaetorio al gamer. luego se pregunta si desea seguir
si - se le da otra carta 
no - se termina 
Si se pasa de 21 pierde*/
juegaGamer();

function juegaGamer(){
    cartaAleatoria =  (Math.round(Math.random() * 9)) + 1;
    paloAleatorio = (Math.round(Math.random() * 3));
    cartaPalo = `${cartaAleatoria} ${palos[paloAleatorio]}`;

    while(cartasMostradas.indexOf(cartaPalo) > -1){
        cartaAleatoria =  (Math.round(Math.random() * 9)) + 1;
    paloAleatorio = (Math.round(Math.random() * 3));
    cartaPalo = `${cartaAleatoria} ${palos[paloAleatorio]}`;
    }
    cartasMostradas.push(cartaPalo);

    let carta = `El ${cartaAleatoria} de ${palos[paloAleatorio]}.`;
    let mensaje = document.createElement("p");
    mensaje.innerText = carta;
    document.getElementById("mensajeGamer").appendChild(mensaje);
    sumaCartasGamer = sumaCartasGamer + cartaAleatoria;
    if (sumaCartasGamer >= 21){
        juegaDealer();
    }
}

/*Va acumulando valores hasta que su número es menor o igual a 21, nunca se va pasar del 21*/
function juegaDealer(){

    document.getElementById("opciones").style.display="none";
    document.getElementById("botones").style.display="none";

    do {
    let titulo = "Cartas de la banca";
    document.getElementById("cabecera").innerHTML = titulo;

    cartaAleatoria =  (Math.round(Math.random() * 9)) + 1;
    paloAleatorio = (Math.round(Math.random() * 3));
    cartaPalo = `${cartaAleatoria} ${palos[paloAleatorio]}`;
    
    while(cartasMostradas.indexOf(cartaPalo) > -1){
        cartaAleatoria =  (Math.round(Math.random() * 9)) + 1;
    paloAleatorio = (Math.round(Math.random() * 3));
    cartaPalo = `${cartaAleatoria} ${palos[paloAleatorio]}`;
    }
    cartasMostradas.push(cartaPalo);

    let carta = `El ${cartaAleatoria} de ${palos[paloAleatorio]}.`;
    let mensaje = document.createElement("p");
    mensaje.innerText = carta;
    document.getElementById("mensajeDealer").appendChild(mensaje);
    sumaCartasDealer = sumaCartasDealer + cartaAleatoria;
    } while (sumaCartasDealer <= 21 && sumaCartasDealer < sumaCartasGamer);
    
/*gamer > 21 pierde gamer
gamer > dealer gana gamer
gamer < dealer pierde gamer
gamer = dealer empate*/

    let resultado;
    if(sumaCartasGamer > 21 || sumaCartasGamer < sumaCartasDealer){
        resultado = "¡Has perdido!";
    } else if (sumaCartasGamer > sumaCartasDealer){
        resultado = "¡Has ganado!";
    } else{
        resultado = "¡Empate!"
    }
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("volver").style.display="block";
}

function volverAJugar(){
    window.location.reload();
}

function salirAdios(){
    document.getElementById("volver").style.display="none";
    let despedida = "¡Adiós!";
    document.getElementById("despedida").innerHTML = despedida;
}




