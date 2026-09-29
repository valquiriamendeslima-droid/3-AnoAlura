btnIniciar.addEventListener("click", iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    nome = aleatorio(nomes);
    caixaInicial.style.display = "none";
    caixaResultado.style.display = "none";
    mostraPergunta();
}

// Função para voltar para a tela inicial com o texto de introdução
function voltarParaTelaInicial() {
    caixaResultado.style.display = "none";
    caixaInicial.style.display = "block";
}

// Altere o evento do botão "Jogar Novamente" para chamar a nova função
btnJogarNovamente.addEventListener("click", voltarParaTelaInicial);
