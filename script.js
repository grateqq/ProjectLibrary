console.log("hola")
const libreria = [];


function Book (author, pages, name ) {
  this.author = author;
  this.pages = pages;
  this.name = name;
}

function addbooktolibrary (author, pages, name) {
  const libro = new Book (author, pages, name);
  libro.id = crypto.randomUUID()
  libreria.push(libro)
}

function readLibrary (libreria) {
  libreria.forEach(function(libro) {
    console.log(libro)
 })
}
//Ejemplo Carga inicial
addbooktolibrary ("jere", 200, "Hilo Rojo")
addbooktolibrary ("mica", 300, "Hilo Azul")
addbooktolibrary ("miche", 400, "TapaDorada")
// console.log(libreria)



readLibrary(libreria)
console.log("ok----")
const tbody= document.getElementById ("table-body");
console.log(tbody); 

function printlibrary (libreria) {
 
  libreria.forEach(function(libro) {
    console.log(libro.name); console.log(libro.pages);console.log(libro.author)
     const newtr = document.createElement('tr')
      newtr.innerHTML = `

        <th>${libro.name}</th>
        <th>${libro.author}</th>
        <th>${libro.pages}</th>
      </tr>
      `
      tbody.appendChild(newtr)
    
 })
}
//Ej

printlibrary(libreria)




