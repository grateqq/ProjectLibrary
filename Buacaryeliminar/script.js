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

//Ejemplo Carga inicial
addbooktolibrary ("jere", 200, "Hilo Rojo")
addbooktolibrary ("mica", 300, "Hilo Azul")
addbooktolibrary ("miche", 400, "TapaDorada")
// console.log(libreria)


//test 
readLibrary(libreria)
console.log("ok----")

//F visualiza en la tabla todos los libros
// imprimir boton delete

function printlibrary (libreria) {
 
  libreria.forEach(function(libro) {
    const tbody= document.getElementById ("table-body");
    console.log(tbody); 

    console.log(libro.name); console.log(libro.pages);console.log(libro.author)
    const newtr = document.createElement('tr')
    newtr.innerHTML = `
      <tr>
        <td>${libro.name}</td>
        <td>${libro.author}</td>
        <td>${libro.pages}</td>
        <td><button class="btndeletee" data-id='${libro.id}'>x</button></td>
      </tr>
      `
      
      tbody.appendChild(newtr)
      

  })
}
printlibrary(libreria)

// // const btndelete = document.querySelectorAll("btn-delete")
// const bottondelete = document.createElement("button")
// bottondelete.addEventListener('click', function(event) { console.log("click click")})
// const body = document.querySelector("body")
// body.appendChild(bottondelete)
// console.log(bottondelete)

// console.log(btndelete)


// const btndelete = document.("btn-delete")
//   btndelete.forEach(boton =>{
//   boton.addEventListener('click', () => {
//     console.log("click delete")
//   })

// })
console.clear()
console.log("h")
const btndelete = document.querySelectorAll(".btndeletee");
console.table(btndelete)
btndelete.forEach(function (btne) {btne.addEventListener("click", function(event) {
  // console.log("click event")
  
})})
// ('click', function(event) { console.log("click click")})


