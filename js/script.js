function calculaImc(altura, peso) {
    return peso / (altura * altura);
}

function resultadoTela() {
    const pesoInformado = document.getElementById("peso").value;
    const alturaInformada = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");

    const imc = calculaImc(alturaInformada, pesoInformado);
    let mensagem = `Seu IMC é ${imc}. `;

    resultado.textContent = mensagem;
}


const botao = document.getElementById("btnEnviar");
botao.addEventListener('click',resultadoTela);