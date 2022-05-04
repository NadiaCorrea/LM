/* • Crea una clase Libro. 
• La clase libro tendrá título, autor, año y género. 
• Crea un método que devuelva toda la información del libro. */

class Libro{
    constructor(titulo, autor, anno, genero){
        this.titulo = titulo.toUpperCase()
        this.autor = autor.toUpperCase()
        this.anno = anno
        this.genero = genero.toUpperCase()

        this.datos = `${this.titulo} ${this.autor} ${this.anno} ${this.genero}`
    }

    infoLibro(){
        return this.datos;
    }
}

var titulo;
var autor; 
var anno;
var genero;
var libros = [];

/* Pide 3 libros y guárdalos en un array.  
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt. 
• Validar que los campos no se introduzcan vacíos. 
• Validar que el año sea un número y que tenga 4 dígitos. 
• Validar que el género sea: aventuras, terror o fantasía.  */

for (let i=0; i <= 2; i++){
    do{
        titulo = prompt("Introduce el título");
    }while(titulo == null || titulo =="")

    do {
        autor = prompt("Introduce el autor");
    }while(autor == null || autor =="");

    do{
        anno = prompt("Introduce el año");
        annoInt = parseInt(anno);
    }while(anno.length!= 4 || isNaN(annoInt));

    do{
        genero =  prompt("Introduce el género");
    } while(genero.toUpperCase() !='AVENTURAS' && genero.toUpperCase() != 'TERROR' && genero.toUpperCase() != 'FANTASÍA');

    const libroAux = new Libro(titulo,autor,parseInt(anno),genero);
    libros.push(libroAux);
}

mostrarLibros(libros);
mostrarAutoresOrdenados(libros);
buscarGenero(libros);

/* • Crea una función que muestre todos los libros. */ 

function mostrarLibros(libros){
    for(let i = 0; i < libros.length; i ++){
        console.log(libros[i]);
    }
}

/* • Crea una función que muestre los autores ordenados alfabéticamente. */
function mostrarAutoresOrdenados(libros){
    let autores =[];
    for(let i= 0; i < libros.length; i++){
        autores.push(libros[i].autor.toUpperCase());
    }
    console.log(autores.sort());
}
/* 
• Crea una función que pida un género y muestre la información de los libros 
que pertenezcan a ese género usando el método que devuelve la información. */

function buscarGenero(libros){
    let generoBuscar;

    do{
        generoBuscar =  prompt("Introduce el género que quieres buscar");
    } while(generoBuscar.toUpperCase() !='AVENTURAS' && generoBuscar.toUpperCase() != 'TERROR' && generoBuscar.toUpperCase() != 'FANTASÍA');

    for(let i = 0; i < libros.length; i++){
        if(libros[i].genero == generoBuscar.toUpperCase()){
            console.log(libros[i].infoLibro());
        }
    }
}