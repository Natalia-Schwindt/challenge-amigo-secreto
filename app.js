let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.querySelector("#amigo").value;
    if (nombreAmigo == "") {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombreAmigo);
        mostrarAmigos();
        document.querySelector("#amigo").value = "";
    }
}

function mostrarAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
       let li = document.createElement("li");
       li.innerText = amigo;
       lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
    } else {
        let sorteado = Math.floor(Math.random() * amigos.length);
        let nombreSorteado = amigos[sorteado];
        document.getElementById("resultado").innerHTML = `El amigo secreto es: ${nombreSorteado}`;
        document.querySelector("#listaAmigos").innerHTML = "";
    }
}