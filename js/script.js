function calculaImc(altura, peso) {
    return peso / (altura * altura);
}

function resultadoTela() {
    const altura = document.getElementById("peso").value;
    const peso = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");

    const imc = calculaImc();
    let mensagem = `Seu IMC é ${imc}. `;

    resultado.textContent = mensagem;
}


const botao = document.getElementById("btnEnviar");
botao.addEventListener('click',resultadoTela);