
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual tipo de experiência você busca em sua viagem?",
        alternativas: [
            {
                texto: "relaxar e recarregar energias",
                afirmacao: "Ótima escolha para quem precisa descansar e se conectar consigo mesmo. Destinos com spas, resorts e atividades relaxantes são perfeitos para essa opção. "
            },
            {
                texto: "Aventura e exploração",
                afirmacao: "Ideal para quem busca adrenalina e novas experiências. Trilhas, esportes radicais e destinos exóticos garantem uma viagem emocionante"
            }
        ]
    },
    {
        enunciado: "Qual o seu estilo de viagem preferido?",
        alternativas: [
            {
                texto: "Viagem com amigos",
                afirmacao: " Perfeito para compartilhar momentos inesquecíveis com amigos, criar memórias e fortalecer laços."
            },
            {
                texto: "Viagem em família",
                afirmacao: " Uma ótima maneira de se unir com a família, criar laços e proporcionar momentos divertidos para todas as idades"
            }
        ]
    },
    {
        enunciado: "Qual o seu orçamento para a viagem?",
        alternativas: [
            {
                texto: "Baixo custo",
                afirmacao: "Uma ótima maneira de viajar com um orçamento limitado, explorando o destino de forma autêntica e econômica."
            },
            {
                texto: "Alto custo",
                afirmacao: "Proporciona experiências luxuosas e exclusivas, com hotéis cinco estrelas, restaurantes renomados e serviços personalizados."
            }
        ]
    },
    {
        enunciado: "Quanto tempo você tem disponível para a viagem?",
        alternativas: [
            {
                texto: "Viagem de uma semana",
                afirmacao: " Permite explorar um destino com mais calma e tempo para curtir as atrações."
            },
            {
                texto: "Viagem sabática",
                afirmacao: " Uma oportunidade única para se desconectar da rotina e explorar o mundo sem pressa."
            }
        ]
    },
    {
        enunciado: "Você prefere viajar para um destino nacional ou internacional? ",
        alternativas: [
            {
                texto: "Nacional",
                afirmacao: " Facilidade de comunicação, menor tempo de viagem, custo geralmente mais baixo."
            },
            {
                texto: "Internacional",
                afirmacao: "Imersão em novas culturas, experiências únicas, conhecimento de diferentes países "
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