function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.querySelector("#output-texto").value = textoCifrado;
    toggleMuñecoVisibility(textoCifrado);
}

function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector("#output-texto").value = textoCifrado;
    toggleMuñecoVisibility(textoCifrado);
}

function copiarTexto() {
    var textoSalida = document.querySelector("#output-texto");
    textoSalida.select();
    document.execCommand("copy");
}

function toggleMuñecoVisibility(texto) {
    var imagenDescripcionContainer = document.querySelector("#imagen-descripcion-container");
    var outputContainer = document.querySelector("#output-container");
    if (texto.trim() === "") {
        imagenDescripcionContainer.classList.remove("hidden");
        outputContainer.classList.add("hidden");
    } else {
        imagenDescripcionContainer.classList.add("hidden");
        outputContainer.classList.remove("hidden");
    }
}

function validateInput() {
    var inputTexto = document.querySelector("#input-texto");
    inputTexto.value = inputTexto.value.replace(/[^a-z\s]/g, '');
}

document.querySelector("#btn-encriptar").addEventListener("click", encriptar);
document.querySelector("#btn-desencriptar").addEventListener("click", desencriptar);
document.querySelector("#btn-copiar").addEventListener("click", copiarTexto);

document.querySelector("#input-texto").addEventListener("input", function() {
    toggleMuñecoVisibility(this.value);
    validateInput();
});
