// Função exportada para sortear um elemento aleatório de qualquer lista
export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}
```[cite: 1]

---

### **4. `script.js`**
Substitua todo o conteúdo do seu `script.js` por este código (já importando o módulo `aleatorio.js`, sorteando o nome e controlando os botões "Iniciar" e "Jogar Novamente")[cite: 1, 2]:

```javascript
import { aleatorio } from "./aleatorio.js";

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaInicial = document.querySelector(".caixa-inicial");
const btnIniciar = document.querySelector(".btn-iniciar");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const btnJogarNovamente = document.querySelector(".btn-jogar-novamente");

// Lista de nomes para substituir dinamicamente na história
const nomes = ["Gabriel", "Fernanda", "Lucas", "Mariana", "Juliana", "Rafael"];
let nome = "";

// Lista de perguntas e afirmações em arrays
const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início, ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em tarefas da sua vida."
                ]
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, uma professora decidiu fazer uma sequência de aulas sobre IA. No fim, pede que escreva um trabalho. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca com IA para ajudar a encontrar informações.",
                afirmacao: [
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada.",
                    "Aproveitou a tecnologia para encontrar informações relevantes mais rapidamente."
                ]
            },
            {
                texto: "Escrever o trabalho com base em pesquisas na internet e conhecimentos próprios.",
                afirmacao: [
                    "Decidiu compartilhar seus conhecimentos utilizando fontes tradicionais.",
                    "Preferiu fazer a pesquisa de forma autónoma sem depender diretamente de ferramentas automáticas."
                ]
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Evento do botão Iniciar
btnIniciar.addEventListener("click", iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    nome = aleatorio(nomes); // Sorteia um nome para o personagem
    caixaInicial.style.display = "none";
    caixaResultado.style.display = "none";
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    // Substitui 'você' pelo nome sorteado na pergunta se necessário
    caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/g, nome);
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaselecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaselecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}...`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

// Evento para reiniciar o jogo
btnJogarNovamente.addEventListener("click", iniciaJogo);
```[cite: 1, 2]

---

### **Como testar tudo no navegador:**
1. Guarde todos os 4 ficheiros no VS Code (`Ctrl + S` em cada um).
2. Se estiver a abrir o `index.html` diretamente do disco local, o recurso de módulos (`import/export`) do navegador pode exigir que abra a página via extensão **Live Server** do VS Code:
   * Clique com o **botão direito no `index.html`** no VS Code e selecione **"Open with Live Server"**.
3. A tela inicial com a explicação e o botão **"Iniciar"** surgirá na tela[cite: 2]! Ao clicar, o jogo sorteará um nome para a jornada e iniciará as perguntas[cite: 2].
