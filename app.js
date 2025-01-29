let nombresSecretos = [];

function agregarAmigo() {
    let nombreAmigo = document.querySelector("#amigo").value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }

    if (nombresSecretos.includes(nombreAmigo)) {
        alert("Lo lamento, pero este nombre ya está agregado");
        return;
    }

    nombresSecretos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let amigo of nombresSecretos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let listaResultado = document.querySelector("#resultado");
    listaResultado.innerHTML = "";

    if (nombresSecretos.length === 0) {
        let li = document.createElement("li");
        li.textContent = "No hay amigos para sortear";
        listaResultado.appendChild(li);
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresSecretos.length);
    let amigoSorteado = nombresSecretos[indiceAleatorio];
    let li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    listaResultado.appendChild(li);
}
