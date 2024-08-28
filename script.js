var textInput = document.querySelector("#entrada_texto");
var outInput = document.querySelector("#output");
function btnEncriptar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('output').innerHTML = '<textarea readonly class="output__texto" id="output__texto">' + resultCripto + '</textarea>' +
                                                  '<button class="btn__copiar" id="copiar" onclick="copiar()">Copiar</button>';
}
function btnDesencriptar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('output').innerHTML = '<textarea readonly class="output__texto" id="output__texto">' + resultDescripto + '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">Copiar</button>';
}
function copiar() {
    var textCop = document.getElementById('output__texto');

    textCop.select();
    document.execCommand('copy');
    alert('Texto Copiado!');
}