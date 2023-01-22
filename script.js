var digite = document.querySelector("#digite_seu_texto");
var mensagem = document.querySelector("#resultado_mensagem");
document.addEventListener("submit",(e) => e.preventDefault());

function criptografar (){

    var teste = digite.value;
    var regex =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~áàâãéèêíïóôõöúçñ]/;
    var resultado = (regex.test(teste));

    if (resultado == true) {
        alert("Sem acentos ou caracteres especiais, por favor!")
    } else {

        var texto = digite.value;

        var resultadoCrip = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

        document.getElementById('resultado_mensagem').innerHTML = '<textarea readonly id="digite_seu_texto" class="mensagem">' + resultadoCrip + '</textarea>' + '<button class="botao_copiar" id="copiar" onclick="copiar()" >Copiar</button>';
    }
}

function descriptografar () {

    var teste = digite.value;
    var regex =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~áàâãéèêíïóôõöúçñ]/;
    var resultado = (regex.test(teste));
    
    if (resultado == true) {
        alert("Sem acentos ou caracteres especiais, por favor!")
    } else {

        var texto = digite.value;

        var resultadoDescrip = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");

        document.getElementById('resultado_mensagem').innerHTML = '<textarea readonly id="digite_seu_texto" class="mensagem">' + resultadoDescrip + '</textarea>' + '<button class="botao_copiar" id="copiar" onclick="copiar()" >Copiar</button>';
    }
}

function copiar() {
    
    var texto_copiado = document.getElementById("digite_seu_texto");

    texto_copiado.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}

