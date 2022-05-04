/*7. Crear un objeto usado para representar un artículo de una tienda. 
El artículo se va a caracterizar por una descripción, un código y un precio, 
y debe permitir el cálculo de su correspondiente IVA.  
 Habrá que crear el correspondiente formulario usando el objeto, con sus propiedades y métodos. 
 La usará la siguiente nomenclatura: la función obj_articulo será el constructor del objeto 
mientras que las funciones iva() y total(reb) serán métodos para ese objeto.
El argumento de la segunda indica un posible descuento. Estas funciones serán simples operaciones aritméticas.
 En cuanto al constructor las propiedades (desc, codigo, valor) se pueden asignar directamente
usando this para referirnos al propio objeto. 
Para los métodos se puede hacer igual pero asignándole funciones (iva, total).    
 Una vez introducidos los datos en el formulario, el resultado será mostrar la descripción del artículo, 
su precio, el iva y el precio de venta aplicando el descuento. Todo ello usando objetos. */

class obj_articulo {
    constructor(desc, codigo, precio) {
        this.desc = desc;
        this.codigo = codigo;
        this.precio = precio;
    }

    iva() {
        return 1.21 * this.precio;
    }

    total(reb) {
        return ((100 - reb) / 100) * this.iva();
    }
}

function mostrarDatos() {
    let codigo = document.getElementById("formCodigo").value;
    let desc = document.getElementById("formDesc").value;
    let precio = document.getElementById("formPrecio").value;
    let articulo = new obj_articulo(desc, codigo, precio);

    document.getElementById("dataDesc").innerText = articulo.desc;
    document.getElementById("dataPrecio").innerText = articulo.precio;
    document.getElementById("dataPrecioIva").innerText = articulo.iva();
    document.getElementById("dataPrecioReb").innerText = articulo.total(20);
    document.getElementById("resultado").style.display = "block";
}