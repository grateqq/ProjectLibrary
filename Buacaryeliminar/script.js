console.log("hola")
// memoria

const libreria = [];

//F. constructura
function Book (author, pages, name ) {
  this.author = author;
  this.pages = pages;
  this.name = name;
}

// F. Lee la libreria en consola
function readLibrary (libreria) {
  libreria.forEach(function(libro) {
    console.log(libro)
 })
}

//F. agrega un librio a la libreria
function addbooktolibrary (author, pages, name) {
  const libro = new Book (author, pages, name);
  libro.id = crypto.randomUUID()
  libreria.push(libro)
}
// F. elimina libro con id

function deleteindice(indice) {
  libreria.splice(indice,1)
  console.log("corte-----------")
  readLibrary(libreria)
}

// Funcion que busque indice pr id
function indiceID (libreria) {
  const indice = libreria.findIndex(libro => libro.author === "jere");
    console.log(indice)
}


// console.log(libreria)

console.log("ok----")

// console.log(libreria[1].name)

//Carga inicial
addbooktolibrary ("jere", 200, "Hilo Rojo")
addbooktolibrary ("mica", 300, "Hilo Azul")
addbooktolibrary ("miche", 400, "TapaDorada")
// Impresion inicial
readLibrary(libreria)
//cortamos y volvemos a imprimier
deleteindice(2)
//busca por propiedad
indiceID(libreria)