console.log("hola")
// memoria

const libreria = [];


//F. constructura
function Book (author, pages, name, isread) {
  this.author = author;
  this.pages = pages;
  this.name = name;
  this.isread = isread;
}
//F. agrega un librio a la libreria
function addbooktolibrary (author, pages, name, isread) {
  const libro = new Book (author, pages, name, isread);
  libro.id = crypto.randomUUID()
  libreria.push(libro)
}
// F. Lee la libreria en consola
function readLibrary () {
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

//F. read or no
function changeisread (indice) {

  if (libreria[indice].isread === true) {
    libreria[indice].isread = false
  } else {
    libreria[indice].isread = true
  }
}



//F. Buscar indice segun id
function indiceID (idlibro) {

  const indice = libreria.findIndex(libro => libro.id === idlibro);
    console.log(indice)
    return indice
}


//F visualiza en la tabla todos los libros

function printlibrary () {

   libreria.forEach(function(libro) {
    const tbody= document.getElementById ("table-body");
    let cheakisok = ""
    if (libro.isread === true) {cheakisok = "checked"}
    else {cheakisok = ""}
    // console.log(tbody); 

    // console.log(libro.name); console.log(libro.pages);console.log(libro.author)
     const newtr = document.createElement('tr')
      newtr.innerHTML = `

        <th>${libro.name}</th>
        <th>${libro.author}</th>
        <th>${libro.pages}</th>
        
        <div>
          <input type="checkbox" class="isRead" id="isRead" name="isRead" data-id="${libro.id}" ${cheakisok}>
          <label for="isRead">¿Leído?</label>
        </div>

        <th><button class="btn-delete" data-id="${libro.id}" >X</button></th>   
        
      `
    tbody.appendChild(newtr)
  })

  const btndelete = document.querySelectorAll(".btn-delete")
    // console.log(btndelete)
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


  const btnisread = document.querySelectorAll(".isRead")
  // console.log(btnisread)
  btnisread.forEach(function(button){
      button.addEventListener("click", function(event) {
      const idbook = button.dataset.id
      console.log(button.dataset.id)
      const indiceBook = indiceID(idbook)
      console.log(indiceBook)
      changeisread(indiceBook)
      console.table(libreria[indiceBook])
      resettable()
      // readLibrary()
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
formnewbook.addEventListener
btnopenform.addEventListener('click', function() {
  
  formnewbook.style.display = 'flex';  // o 'flex', 'grid' según necesites
  
});
/// work here
// formnewbook.addEventListener('click', event => {
//      event.preventDefault()
// } )

const btnsubmit = document.getElementById("btn-submit")
// console.log(btnsubmit)
//hacer funcionar el boton
btnsubmit.addEventListener('click', event => {
  event.preventDefault()
  
    
    console.log("click en submit");
    addbooktolibrary (
      document.getElementById('author').value,
      document.getElementById('pages').value,
      document.getElementById('name').value,
      document.getElementById('isRead').checked

    )
    resettable()


    printlibrary(libreria)
    formnewbook.style.display = 'none'
    formnewbook.reset();
    
   
  })






/// work antes
console.log("ok----")
//Ejemplo Carga inicial
addbooktolibrary ("jere", 200, "Hilo Rojo",true)
addbooktolibrary ("mica", 300, "Hilo Azul",true)
addbooktolibrary ("miche", 400, "TapaDorada",false)
// console.log(libreria)


//test 
// readLibrary(libreria)

printlibrary(libreria)
// // console.clear()
// console.clear()
// // console.log(libreria[2].isread)
// // resettable()
