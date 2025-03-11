// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
        
    if(!nombreAmigo){
    //otra forma de hacer este if(nombreAmigo == false
        alert("Debes ingresar al menos un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";  //dejar vacío el input después de agregar el amigo
    inputAmigo.focus(); //regresar el foco al input después de agregar el amigo
    visualizarAmigos();  //mostrar los amigos actualizados en la lista
}

function visualizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  //limpiar la lista antes de agregar nuevos amigos

    for(let i = 0; i < amigo.length; i++){
        let amigoItem = document.createElement("li");
        amigoItem.textContent = amigo[i];
        listaAmigos.appendChild(amigoItem);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){ //Si amigo es igual a cero, mostrar una alerta
        alert("No hay amigos para sortear");
        return; //Si no hay amigos, terminar la función
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    //usando un  template string para usar variables y agregar un texto

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";  //Limpiar lista después de sortear amigo secreto
    
}