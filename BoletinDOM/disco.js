/*
3.- Necesitamos almacenar en un programa todos los discos de música que tenemos en casa.
Ahora que sabemos crear nuestros propios objetos es el mejor modo de guardar esta
información.
3.1.- Crea un objeto “disco” que almacene la siguiente información:
§ Nombre del disco.
§ Grupo de música o cantante.
§ Año de publicación.
§ Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
§ Localización: almacenará un número de estantería.
§ Prestado: almacenará un valor booleano. Por defecto será false.
Además tendrá los siguientes métodos:
§ Un constructor sin parámetros (las 4 primeras propiedades serán cadenas vacías, la
localización será 0 por defecto y prestado estará a false).
§ Un constructor con parámetros (se pasarán solo las cinco primeras propiedades; la
propiedad prestado será false).
§ Un método que permitirá cambiar el número de estantería en la localización.
§ Un método que permitirá cambiar la propiedad Prestado.
§ Un método que muestre toda la información de un disco.
§ Guarda todo el código en un archivo llamado disco.js*/

class Disco {

    constructor(){
        this.nombre = "";
        this.cantante = "";
        this.publicacion="";
        this.tipo="";
        this.localizacion = 0;
        this.prestado = false;
    }
    constructor(nombre, cantante, publicacion, tipo, localizacion){
        this.nombre = nombre;
        this.cantante = cantante;
        this.publicacion= publicacion;
        this.setTipo(tipo);
        this.localizacion = localizacion;
        this.prestado = false;
    }
   
    setLocalizacion(nuevaEstanteria){
        if (nuevaEstanteria > 0){
            this.localizacion = nuevaEstanteria;
        }
        
    }   

    setPrestado(prestamo){
        if(upper(prestamo) == 'TRUE' || upper(prestamo) == 'FALSE'){
            this.prestado = prestamo;
        }
    }

    setTipo(musica){
        tipos =['rock', 'pop', 'punk', 'indie']
        if (lower(musica) in tipos){
            this.tipo = musica;
        }
    }

    showInfo(){
        `Nombre del disco: ${this.nombre} <br>
        Nombre del grupo o cantante: ${this.cantante} <br>
        Año de publicación: ${this.publicacion} <br>
        Tipo de música: ${this.tipo} <br>
        Estantería: ${this.localizacion}`
    }
}




