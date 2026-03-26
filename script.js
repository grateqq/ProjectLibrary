console.log("hola")
// memoria

const libreria = [];


//F. constructura
function Book (author, pages, name ) {
  this.author = author;
  this.pages = pages;
  this.name = name;
}
//F. agrega un librio a la libreria
function addbooktolibrary (author, pages, name) {
  const libro = new Book (author, pages, name);
  libro.id = crypto.randomUUID()
  libreria.push(libro)
}
// F. Lee la libreria en consola
function readLibrary (libreria) {
  libreria.forEach(function(libro) {
    console.log(libro)
 })
}

//F. Clear tabla

function resettable() {
  const table = document.getElementById("table-body")
  table.innerHTML = ``
}
// F. Elimina libro segun id
function deleteindice(indice) {
  libreria.splice(indice,1)
  console.log("corte-----------")
  readLibrary(libreria)
  printlibrary(libreria)
}
//F. Buscar indice segun id
function indiceID (idlibro) {

  const indice = libreria.findIndex(libro => libro.id === idlibro);
    console.log(indice)
}


//F visualiza en la tabla todos los libros

function printlibrary () {

   libreria.forEach(function(libro) {
    const tbody= document.getElementById ("table-body");
    // console.log(tbody); 

    // console.log(libro.name); console.log(libro.pages);console.log(libro.author)
     const newtr = document.createElement('tr')
      newtr.innerHTML = `

        <th>${libro.name}</th>
        <th>${libro.author}</th>
        <th>${libro.pages}</th>
        <th><button class="btn-delete" data-id="${libro.id}" >X</button></th>   
        
      `
    tbody.appendChild(newtr)
  })
  const btndelete = document.querySelectorAll(".btn-delete")
  console.log(btndelete)
  btndelete.forEach(function(button){
    button.addEventListener("click", function(event) {
      const idbook = button.dataset.id
      console.log(button.dataset.id)
      const indiceBook = indiceID(idbook)
      console.log(indiceBook)
      deleteindice(indiceBook)
      console.log(libreria)
      resettable()
      printlibrary()
    })
  })
  
  
}
//Ej



// Intereccion de usuario con funciones

const btnopenform = document.getElementById("btn-openform")
// console.log(btnopenform)

const formnewbook = document.getElementById("formaddbook")
// console.log(formnewbook)

btnopenform.addEventListener('click', function() {
  formnewbook.style.display = 'block';  // o 'flex', 'grid' según necesites
});


console.log("ok----")
//Ejemplo Carga inicial
addbooktolibrary ("jere", 200, "Hilo Rojo")
addbooktolibrary ("mica", 300, "Hilo Azul")
addbooktolibrary ("miche", 400, "TapaDorada")
// console.log(libreria)


//test 
readLibrary(libreria)

printlibrary(libreria)
// console.clear()

// resettable()