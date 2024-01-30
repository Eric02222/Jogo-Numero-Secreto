let lisraNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
    
}

function mensagemInicioJogo() {
    exibirNaTela('h1', 'Jogo do numero secreto');
    exibirNaTela('p', 'Escolha um numero entre 1 e 10');
}

mensagemInicioJogo();   

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirNaTela('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirNaTela('h1', 'o numero e menor');
        }else{
            exibirNaTela('h1', 'o numero e maior');
        }
        tentativas++
        limparCamopo();
    }
}

function limparCamopo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = lisraNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        lisraNumerosSorteados = [];
    }

    if (lisraNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        lisraNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCamopo();
    tentativas = 1;
    mensagemInicioJogo();
    document.getElementById('reiniciar').setAttribute('diabled', true);
}