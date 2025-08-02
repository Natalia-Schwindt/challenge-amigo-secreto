let amigos = [];

// Expresión regular para nombres válidos: letras y espacios normales, sin caracteres raros
const nombreValidoRegex = /^[a-zA-ZÀ-ÿ\s'-]{1,30}$/;

// Evitamos la recarga si esto está dentro de un <form>
document.querySelector("form")?.addEventListener("submit", function (e) {
    e.preventDefault();
});

// Agregar amigo
function agregarAmigo() {
    let input = document.querySelector("#amigo");
    let nombreAmigo = input.value.trim(); //  Eliminamos espacios innecesarios

    // Validaciones
    if (nombreAmigo === "") {
        alert('Por favor, inserte un nombre válido');
        input.focus();
        return;
    }

    if (!nombreValidoRegex.test(nombreAmigo)) {
        alert('Nombre inválido. Solo letras, espacios y guiones permitidos (máx 30 caracteres)');
        input.focus();
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Ese nombre ya fue agregado');
        input.focus();
        return;
    }

    // Si pasa todas las validaciones
    amigos.push(nombreAmigo);
    mostrarAmigos();

    input.value = "";
    input.focus();
    document.querySelector("#resultado").innerHTML = "";
}

// Mostrar lista actualizada
function mostrarAmigos() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.innerText = amigo;

        // Botón para eliminar individualmente
        const btnEliminar = document.createElement("button");
        btnEliminar.innerText = "🗑️";
        btnEliminar.setAttribute("aria-label", `Eliminar a ${amigo}`);
        btnEliminar.title = `Eliminar a ${amigo}`;
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Eliminar un amigo por índice
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
    document.querySelector("#resultado").innerHTML = "";
}

// Sorteo con validación de mínimo 2 amigos y animación
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear");
        return;
    }

    // Animación: nombre girando antes de mostrar el resultado
    resultado.innerHTML = "Sorteando...";
    resultado.style.opacity = 0;
    resultado.style.transition = "opacity 1s";

    setTimeout(() => {
        const sorteado = Math.floor(Math.random() * amigos.length);
        const nombreSorteado = amigos[sorteado];

        resultado.innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong>`;
        resultado.style.opacity = 1;

        // Limpiamos lista pero sin reiniciar la página
        document.querySelector("#listaAmigos").innerHTML = "";
        amigos = [];
    }, 1000);
}

// Reiniciar manual (no por sorteo)
function reiniciarLista() {
    const confirmar = confirm("¿Estás segura de que querés reiniciar la lista?");
    if (confirmar) {
        amigos = [];
        mostrarAmigos();
        document.querySelector("#resultado").innerHTML = "";
        document.querySelector("#amigo").focus();
    }
}
