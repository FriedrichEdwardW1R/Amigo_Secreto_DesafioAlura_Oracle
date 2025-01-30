// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//button class="button-add" onclick="agregarAmigo()"id="anadir" 
//button class="button-draw" onclick="sortearAmigo()" id="sorteo"

let listaDeAmigos = [];// array amigos
let numeroRandom = 0;

function agregarAmigo(){
 let nombreAmigo = document.getElementById('amigo').value; // Del imput obtengo el nombre de su amigo
 console.log(nombreAmigo);

if (nombreAmigo !== '' ){ //Probamos que lo que metio el usuario no es texto vacio
  listaDeAmigos.push(nombreAmigo);// se agrega el nombre al array
  actualizarLista();// actualizar la lista en el html
  document.getElementById('amigo').value = '';// limpia el texto amigo del html y del valor ya ingresado

 }else{ // En caso de qe es vacio 
  alert('No hay ningún nombre asignado, favor de escribir uno valido...')
}

}

function actualizarLista(){// en el html
 let listaHTML = document.getElementById('listaAmigos'); // obtenemos la lista en HTML
 listaHTML.innerHTML=""; // Limpiamos la lizta con cada actualización

 listaDeAmigos.forEach((amigo) => { // Recorrer el array de amigos
    let li = document.createElement("li"); // Crear un nuevo elemento <li>
    li.textContent = amigo; // Asignar el nombre del amigo al <li>
    listaHTML.appendChild(li); // Agregar <li> a la lista en el HTML
});
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }else{
   numeroRandom = Math.floor(Math.random()*listaDeAmigos.length);// un numero aleatorio para poder escogerlo en base al tamaño del array
   let amigoSorteado = listaDeAmigos[numeroRandom]; // Elegimos el amigo aleatorio

   // Mostrar en el HTML
   let resultadoHTML = document.getElementById("resultado");
   resultadoHTML.innerHTML = `<li>${amigoSorteado} es tu amigo secreto!!!</li>`;
    }
}