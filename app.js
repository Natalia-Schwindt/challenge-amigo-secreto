let amigos = [];

function agregarAmigo(){
    //Obtener el nombre ingresado en el input
    let nombreAmigo = document.querySelector("#amigo").value;

    //Validar que el input no esté vacío
    if (nombreAmigo == "") {
        alert('Por favor, inserte un nombre');
    } else {
        //Agregar el nombre al array amigos
        amigos.push(nombreAmigo);

        //Actualizar la lista visible en pantalla
        mostrarAmigos();

        //Limpiar el campo de entrada
        document.querySelector("#amigo").value = "";

        //Limpiar el resultado del sorteo
        document.querySelector("#resultado").innerHTML = "";
    }
}

function mostrarAmigos() {
    //Seleccionar el elemento <ul> donde se mostrarán los amigos
    let lista = document.querySelector("#listaAmigos");

    //Vaciar la lista antes de agregar nuevos elementos (evitar duplicados)
    lista.innerHTML = "";
    for (let amigo of amigos) {
       let li = document.createElement("li");
       li.innerText = amigo;
       lista.appendChild(li);
    }
}

function sortearAmigo() {
    //Validar que haya amigos para sortear
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
    } else {

        //Generar un índice aleatorio para seleccionar un amigo
        let sorteado = Math.floor(Math.random() * amigos.length);

        //Obtener el nombre del amigo sorteado
        let nombreSorteado = amigos[sorteado];

        //Mostrar el resultado del sorteo en pantalla
        document.getElementById("resultado").innerHTML = `El amigo secreto es: ${nombreSorteado}`;

        //Limpiar la lista visible para que no se muestre mientras está el resultado
        document.querySelector("#listaAmigos").innerHTML = "";

        // Vaciar el array para reiniciar el estado
        amigos = [];
    }
}