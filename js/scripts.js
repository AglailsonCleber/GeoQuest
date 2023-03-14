// Declaração variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const iframeContainer = document.querySelector("#iframe-container");
const formContainer = document.querySelector("#form-container");
const iframeButton = document.querySelector("#btnIframe");
const initContainer = document.querySelector("#init-container")
const initButton = document.querySelector("#btnInit");
const restartBtn = document.querySelector("#restart");
const formBtn = document.querySelector("#form");
const letters = ["a", "b", "c", "d", "e"];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [

  {
    "question": "O processo de transformação das rochas preexistentes formou as chamadas Rochas Metamórficas.\n\rSobre esse processo, também chamado de metamorfização, é correto afirmar que:",
    "answers": [
      {
        "answer": "Acontece próximo à crosta terrestre.",
        "correct": false
      },
      {
        "answer": "É oriundo exclusivamente de regiões oceânicas.",
        "correct": false
      },
      {
        "answer": "Só atua em rochas magmáticas.",
        "correct": false
      },
      {
        "answer": "Só pode ocorrer após o processo de sedimentação das rochas.",
        "correct": false
      },
      {
        "answer": "Ocorre somente em locais de alta pressão e com temperaturas elevadas.",
        "correct": true
      },
    ],
    link: "https://www.youtube.com/embed/ENvJpzgR3Z4",
  },
  {
    "question": "(UFRGS) Considere as afirmações abaixo, sobre a Teoria da Tectônica de Placas. I. A litosfera, de acordo com essa teoria, está fragmentada em placas rígidas que se movimentam. II. As placas tectônicas são movidas pela convecção do manto, e a energia vem do calor interno da Terra. III. Os limites das placas apresentam feições de grandes proporções, como estreitos cinturões de montanhas, cinturões de terremotos e cadeias de vulcões. Quais estão corretas?",
    "answers": [
      {
        "answer": "Apenas I.",
        "correct": false
      },
      {
        "answer": "Apenas II.",
        "correct": false
      },
      {
        "answer": "Apenas III.",
        "correct": false
      },
      {
        "answer": "Apenas II e III.",
        "correct": false
      },
      {
        "answer": "I, II e III.",
        "correct": true
      },
    ],
    link: "https://www.youtube.com/embed/PG02-LybmH4",
  },
  {
    "question": "O conceito de erosão apresenta definições mais amplas ou mais restritas. A mais abrangente envolve os processos de denudação da superfície terrestre de forma geral, incluindo desde os processos de intemperismo de todos os tipos até os de transporte e deposição de material. Outro conceito, mais restrito, envolve apenas o deslocamento do material intemperizado, seja solo ou rocha, por agentes de transporte como a água corrente, o vento, o gelo ou a gravidade, produzindo formas erosivas características.Fairbridge. The Encyclopedia of Geomorphology, 1968. Adaptado.Exemplo de processo ao qual se aplica o conceito mais restrito de erosão é:",
    "answers": [
      {
        "answer": "A formação de rochas.",
        "correct": false
      },
      {
        "answer": "A oxidação de rochas.",
        "correct": false
      },
      {
        "answer": "A formação de sulcos no solo.",
        "correct": true
      },
      {
        "answer": "A formação de concreções no solo.",
        "correct": false
      },
      {
        "answer": "O vulcanismo da crosta.",
        "correct": false
      },
    ],
    link:"https://www.youtube.com/embed/JBkzmR3_R4g",
  },
  {
    "question": "A Geomorfologia é o ramo da Geografia, que se volta, entre outros aspectos, para a compreensão dos processos erosivos, sobretudo em áreas de encostas, constituindo-se, assim, em importante ferramenta para a análise ambiental. Esses processos que ocorrem nas encostas são influenciados pelos seguintes fatores: 1. Longitude 2. Forma das encostas 3. Uso do solo 4. Condições climáticas 5. Estrutura subsuperficial das encostas",
    "answers": [
      {
        "answer": "1 E 5",
        "correct": false
      },
      {
        "answer": "3 E 4",
        "correct": false
      },
      {
        "answer": "2 E 3",
        "correct": false
      },
      {
        "answer": "2,4 E 5",
        "correct": false
      },
      {
        "answer": "2,3,4 E 5",
        "correct": true
      },
    ],
    link:"https://www.youtube.com/embed/ycPToy0t6Io",
  },
  {
    "question": "Os solos são produto de um longo processo de decomposição das rochas, desencadeado conjuntamente pela ação química e física de elementos da dinâmica da natureza. Contudo, com a ocupação humana e o seu consequente uso, os solos podem ser submetidos a severos impactos, como a salinização. A principal causa da salinização dos solos é:",
    "answers": [
      {
        "answer": "A compactação causada pelo pisoteio do gado bovino.",
        "correct": false
      },
      {
        "answer": "O emprego de fertilizantes à base de nitrogênio.",
        "correct": false
      },
      {
        "answer": "A irrigação das lavouras em áreas semiáridas.",
        "correct": true
      },
      {
        "answer": "O desmatamento das matas ciliares.",
        "correct": false
      },
      {
        "answer": "As queimadas para a renovação das pastagens.",
        "correct": false
      },
    ],
    link:"https://www.youtube.com/embed/gbahfW5T0s4",
  },
  {
    "question": "O terremoto de 8,8 na escala Richter que atingiu a costa oeste do Chile, em fevereiro, provocou mudanças significativas no mapa da região. Segundo uma análise preliminar, toda a cidade de Concepción se deslocou pelo menos três metros para o oeste. Buenos Aires moveu-se cerca de 2,5 centímetros para oeste, enquanto Santiago, mais próxima do local do evento, deslocou-se quase 30 centímetros para o oeste-sudoeste. As cidades de Valparaíso, no Chile, e Mendoza, na Argentina, também tiveram suas posições alteradas significativamente (13,4 centímetros e 8,8 centímetros, respectivamente). Revista lnfoGNSS, Curitiba, ano 6, n. 31, 2010. No texto, destaca-se um tipo de evento geológico frequente em determinadas partes da superfície terrestre. Esses eventos estão concentrados em:",
    "answers": [
      {
        "answer": "Áreas vulcânicas, onde o material magmático se eleva, formando cordilheiras.",
        "correct": false
      },
      {
        "answer": "Áreas vulcânicas, onde o material magmático se eleva, formando cordilheiras.",
        "correct": false
      },
      {
        "answer": "Estreitas faixas de intensidade sísmica, no contato das placas tectônicas, próximas a dobramentos modernos.",
        "correct": true
      },
      {
        "answer": "Escudos cristalinos, onde as rochas são submetidas aos processos de intemperismo, com alterações bruscas de temperatura.",
        "correct": false
      },
      {
        "answer": "Áreas de bacias sedimentares antigas, localizadas no centro das placas tectônicas, em regiões conhecidas como pontos quentes.",
        "correct": false
      },
    ],
    link:"https://www.youtube.com/embed/3skZyLp_A0I",
  },
  {
    "question": "Sobre as rochas que compõem a crosta terrestre, assinale a alternativa correta.",
    "answers": [
      {
        "answer": "As rochas sedimentares formaram-se pelo resfriamento e pela solidificação de minerais da crosta terrestre, isto é, o magma.",
        "correct": false
      },
      {
        "answer": "As rochas metamórficas formaram-se a partir das transformações sofridas pelas rochas magmáticas e sedimentares quando submetidas ao calor e à pressão do interior da Terra.",
        "correct": true
      },
      {
        "answer": "As rochas magmáticas formaram-se a partir da compactação de sedimentos de outras rochas.",
        "correct": false
      },
      {
        "answer": "O arenito e o calcário são exemplos de rochas metamórficas.",
        "correct": false
      },
      {
        "answer": "O gnaisse e o mármore são exemplos de rochas sedimentares.",
        "correct": false
      },
    ],
    link:"https://www.youtube.com/embed/DJ6JwUt0D_0",
  },
  {
    "question": "“A transformação de uma lagarta em crisálida e desta em borboleta denomina-se “metamorfose”. No livro famoso de Kafka, “Metamorfose”, o personagem principal transforma-se, de maneira inquietante, em um inseto. Metamorfose significa transformação, mudança de forma, sem que se perca a essência da matéria em transformação […]. Metamorfismo, em Geologia, define o conjunto de processos pelos quais uma determinada rocha é transformada, através de reações que se processam no estado sólido, em outra rocha, com características distintas daquelas que ela apresentava antes da atuação do metamorfismo”. (RUBERTI, E. et al. Rochas Metamórficas. In: TEIXEIRA, W. et al. (orgs.). Decifrando a Terra. São Paulo: Oficina de Textos, 2000. p.382). O processo de metamorfismo acima descrito, responsável pela formação das rochas metamórficas, ocorre a partir de dois principais fatores condicionantes, que são:",
    "answers": [
      {
        "answer": "A temperatura e a pressão do ambiente.",
        "correct": true
      },
      {
        "answer": "O local e a estrutura do ponto onde se encontra a rocha.",
        "correct": false
      },
      {
        "answer": "A ação humana e as condições climáticas.",
        "correct": false
      },
      {
        "answer": "O vulcanismo e os processos tectônicos.",
        "correct": false
      },
      {
        "answer": "Nenhuma das alternativa anteriores.",
        "correct": false
      },
    ],
    link:"https://www.youtube.com/embed/QkxjRXNzAVM",
  },
  {
    "question": "Os movimentos de massa constituem-se no deslocamento de material (solo e rocha) vertente abaixo pela influência da gravidade. As condições que favorecem os movimentos de massa dependem principalmente da estrutura geológica, da declividade da vertente, do regime de chuvas, da perda de vegetação e da atividade antrópica. BIGARELLA, J. J. Estrutura e origem das paisagens tropicais e subtropicais. Florianópolis: UFSC, 2003 (adaptado). Em relação ao processo descrito, sua ocorrência é minimizada em locais onde há:",
    "answers": [
      {
        "answer": "Exposição do solo.",
        "correct": false
      },
      {
        "answer": "Drenagem eficiente.",
        "correct": true
      },
      {
        "answer": "Rocha matriz resistente.",
        "correct": false
      },
      {
        "answer": "Agricultura mecanizada.",
        "correct": false
      },
      {
        "answer": "Média pluviométrica elevada.",
        "correct": false
      },
    ],
    link:"https://www.youtube.com/embed/r3BlRoPy7Cw",
  },
  {
    "question": "[...] Causado pela água das chuvas, tem abrangência em quase toda a superfície terrestre, em especial nas áreas com clima tropical, cujos totais pluviométricos são bem mais elevados do que em outras regiões do planeta. O processo tende a se acelerar à medida que mais terras são desmatadas [...] uma vez que os solos ficam desprotegidos da cobertura vegetal e, consequentemente, as chuvas incidem direto sobre a superfície do terrenos. GUERRA, A. J. T. Geomorfologia urbana. Rio de Janeiro: Bertrand Brasil, 2011. O texto descreve um processo que pode ser acelerado com:",
    "answers": [
      {
        "answer": "A manutenção da vegetação.",
        "correct": false
      },
      {
        "answer": "A construção de curvas de nível.",
        "correct": false
      },
      {
        "answer": "O planejamento urbano e ambiental.",
        "correct": false
      },
      {
        "answer": "O aumento da matéria orgânica do solo.",
        "correct": false
      },
      {
        "answer": "A construção nas encostas de morros.",
        "correct": true
      },
    ],
    link:"https://www.youtube.com/embed/Zh_7E67fqPQ",
  },
]

// Substituição do quizz para a primeria pergunta
function init() {
  // criar a primeira pergunta
  createQuestion(0);
}

// Cria uma pergunta
function createQuestion(i) {

  // Limpar a questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function (btn) {
    btn.remove();
  });

  // Alterar o texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere as alternativas
  questions[i].answers.forEach(function (answer, i) {

    // Cria o template do botão do quizz
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Remover hide e template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Inserir a alternativa na tela
    answersBox.appendChild(answerTemplate);

    // Inserir um evento de click no botão
    answerTemplate.addEventListener("click", function () {
      checkAnswer(this);
    });

  });

  // Incrementar o número da questão
  actualQuestion++;

}

// Verificando resposta do usuário
function checkAnswer(btn) {

  // selecionar todos botões
  const buttons = answersBox.querySelectorAll("button");

  // verifica se a resposta está correta e adiciona classes nos botões
  buttons.forEach(function (button) {

    if (button.getAttribute("correct-answer") === "true") {

      button.classList.add("correct-answer");

      // checa se o usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }

    } else {

      button.classList.add("wrong-answer");

    }

  });

  // Exibir próxima pergunta
  nextQuestion();

}

// Exibir a próxima pergunta no quizz
function nextQuestion() {

  // timer para usuário ver as respostas
  setTimeout(function () {

    createIframe(actualQuestion);

  }, 1500);

}

// Exibe o iframe após a questão
function createIframe(i) {

  const iframeLink = iframeContainer.querySelector("iframe");

  iframeLink.setAttribute("src", questions[i - 1].link);
  // verifica se ainda há perguntas
  if (actualQuestion >= questions.length) {
    iframeButton.textContent = "Finalizar quizz!"
  } else{
    iframeButton.textContent = "Próxima questão."
  }
  hideOrShowQuizz();
  hideOrShowIframe();
};


// Exibe a tela final
function showSucccessMessage() {

  hideOrShowScore();
  hideOrShowIframe();

  // trocar dados da tela de sucesso

  // calcular o score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  // alterar o número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;

}

// Mostra ou esconder conteúdos
function hideOrShowInit() {
  initContainer.classList.toggle("hide");
}
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
}
function hideOrShowScore() {
  scoreContainer.classList.toggle("hide");
}
function hideOrShowIframe() {
  iframeContainer.classList.toggle("hide");
}
function hideOrShowForm() {
  formContainer.classList.toggle("hide");
}


// Funções de click
// Iniciar Quizz
initButton.addEventListener("click", function () {

  setTimeout(function () {

    hideOrShowInit();
    hideOrShowQuizz();

  }, 700);

});
// Reiniciar Quizz
restartBtn.addEventListener("click", function () {

  // zerar o jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowScore();
  hideOrShowQuizz();
  init();

});
// Finalizar Quizz
iframeButton.addEventListener("click", function () {

  setTimeout(function () {

    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta a msg de sucesso
      showSucccessMessage();
      return;
    }

    const iframeLink = iframeContainer.querySelector("iframe");
    iframeLink.removeAttribute("src");

    hideOrShowIframe();
    hideOrShowQuizz();
    createQuestion(actualQuestion);

  }, 1500);

});

formBtn.addEventListener("click", function () {

  setTimeout(function () {

    hideOrShowScore();
    hideOrShowForm();
    
  }, 700);

});

// Inicialização do Quizz
init();