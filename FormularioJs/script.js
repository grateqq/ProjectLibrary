console.log("formualrio")

const form = document.getElementById('form');
form.addEventListener('submit',function(event) {
 event.preventDefault();


const name = document.getElementById('name').value
console.log(name)
libreria.push(name)
console.log(libreria)
})

const libreria = []



