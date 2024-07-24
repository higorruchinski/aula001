const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o impacto da Inteligência Artificial (IA) no mercado de trabalho?",
        alternativas: [
            {
                texto: "A IA pode automatizar tarefas repetitivas, liberando os trabalhadores para funções mais criativas.!",
                afirmacao: "A IA automatiza tarefas repetitivas, permitindo que os trabalhadores se concentrem em funções mais criativas. "
            },
            {
                texto: " Por outro lado, a IA também pode substituir certos empregos, levando a preocupações com o desemprego",
                afirmacao: " No entanto, a IA pode substituir certos empregos, gerando preocupações com o desemprego."
            }
        ]
    },
    {
        enunciado: "Como a Internet das Coisas (IoT) está mudando nossas vidas diárias?",
        alternativas: [
            {
                texto: "Dispositivos conectados, como termostatos inteligentes, tornam nossas casas mais eficientes e confortáveis.",
                afirmacao: "Dispositivos conectados, como termostatos inteligentes, tornam nossas casas mais eficientes e confortáveis.."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: " Entretanto, o aumento de dispositivos conectados também levanta questões de segurança e privacidade."
            }
        ]
    },
    {
        enunciado: "Quais são os benefícios do 5G para a comunicação móvel?",
        alternativas: [
            {
                texto: "O 5G oferece velocidades de download significativamente mais rápidas, melhorando a experiência do usuário.",
                afirmacao: " O 5G proporciona velocidades de download muito mais rápidas, melhorando a experiência do usuário."
            },
            {
                texto: " Além disso, o 5G tem menor latência, o que é crucial para aplicações em tempo real, como carros autônomos.",
                afirmacao: "Além disso, o 5G tem menor latência, o que é crucial para aplicações em tempo real, como carros autônomos."
            }
        ]
    },
    {
        enunciado: "De que maneira a computação em nuvem está transformando as empresas?",
        alternativas: [
            {
                texto: "A computação em nuvem permite que as empresas escalem seus recursos de TI conforme necessário, sem grandes investimentos iniciais.",
                afirmacao: " A computação em nuvem permite que as empresas escalem seus recursos de TI conforme necessário, sem grandes investimentos iniciais."
            },
            {
                texto: "No entanto, as empresas devem considerar a segurança e a conformidade ao migrar para a nuvem.",
                afirmacao: "No entanto, as empresas devem considerar a segurança e a conformidade ao migrar para a nuvem."
            }
        ]
    },
    {
        enunciado: "Qual é o papel da criptografia na proteção de dados? ",
        alternativas: [
            {
                texto: " A criptografia protege informações sensíveis contra acessos não autorizados, garantindo a privacidade dos dados.",
                afirmacao: "A criptografia protege informações sensíveis contra acessos não autorizados, garantindo a privacidade dos dados."
            },
            {
                texto: "No entanto, a criptografia também pode ser um obstáculo para a aplicação da lei em investigações criminais.",
                afirmacao: " No entanto, a criptografia também pode ser um obstáculo para a aplicação da lei em investigações criminais. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
