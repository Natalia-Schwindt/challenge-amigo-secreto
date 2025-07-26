let amigos = [];

function agregarAmigos(){
    let amigo = document.querySelector("#amigo").value;
    if (amigo == "") {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo);
        document.querySelector("#amigo") = "";
    }
}
agregarAmigos();