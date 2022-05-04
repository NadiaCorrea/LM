/*5. Crea el objeto Coche con los atributos marca, modelo y anyo. 
Una vez definido el objeto, crea cuatro instancias del objeto Coche 
y modifícalo para que los valores de cada una de sus propiedades 
se impriman en formato HTML( <table>). 
Utiliza la generación de código HTML desde JavaScript. 
Cada instancia debe ocupar una línea (<tr>) y el valor de cada propiedad debe ocupar una celda 
(<td>) de dicha línea. */

class Coche{
    constructor(marca, modelo, anyo){
        this.marca = marca
        this.modelo = modelo
        this.anyo = anyo

        this.datos = `${this.marca} ${this.modelo} ${this.anyo}`

    }

}

const coche1 = new Coche('Toyota', 'Yaris', 2019);
document.getElementById("marca1").innerHTML = coche1.marca;
document.getElementById("modelo1").innerHTML = coche1.modelo;
document.getElementById("anyo1").innerHTML = coche1.anyo;

const coche2 = new Coche('Toyota', 'Corolla', 2020);
document.getElementById("marca2").innerHTML = coche2.marca;
document.getElementById("modelo2").innerHTML = coche2.modelo;
document.getElementById("anyo2").innerHTML = coche2.anyo;

const coche3 = new Coche('Toyota', 'Rav4', 2020);
document.getElementById("marca3").innerHTML = coche3.marca;
document.getElementById("modelo3").innerHTML = coche3.modelo;
document.getElementById("anyo3").innerHTML = coche3.anyo;

const coche4 = new Coche('Toyota', 'Auris', 2021);
document.getElementById("marca4").innerHTML = coche4.marca;
document.getElementById("modelo4").innerHTML = coche4.modelo;
document.getElementById("anyo4").innerHTML = coche4.anyo;