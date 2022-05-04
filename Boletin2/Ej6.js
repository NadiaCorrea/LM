/*6. Crea un script que defina un objeto llamado Producto_alimenticio. 
Este objeto debe presentar las propiedades código, nombre y precio, 
además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades. 
Posteriormente, crea tres instancias de este objeto y guárdalas en un array. 
Utiliza el método imprimeDatos para mostrar por pantalla el valor de los tres objetos instanciados. */

class Producto_alimenticio {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos() {
        console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}

let producto1 = new Producto_alimenticio('P01', 'Patata', 10);
let producto2 = new Producto_alimenticio('P02', 'Lechuga', 12);
let producto3 = new Producto_alimenticio('P03', 'Tomate', 21);

let arrayProductos = [producto1, producto2, producto3];

console.log('Primera forma');
arrayProductos.forEach((producto) => {
    producto.imprimeDatos();
});

function imprimir(producto) {
    producto.imprimeDatos();
}

console.log('Segunda forma');
arrayProductos.forEach(imprimir);