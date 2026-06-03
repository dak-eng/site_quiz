const DATA = [
  {
    section: 0,
    questions: [
      {
        q: "O que significa HTML?",
        opts: [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Hyper Tool Markup Language",
          "Home Text Markup Language"
        ],
        answer: 0
      },
      {
        q: "Qual tag cria um título principal?",
        opts: ["<title>", "<h1>", "<head>", "<p>"],
        answer: 1
      },
      {
        q: "Qual tag é usada para criar um parágrafo?",
        opts: ["<text>", "<paragraph>", "<p>", "<span>"],
        answer: 2
      },
      {
        q: "Qual tag insere uma imagem?",
        opts: ["<img>", "<image>", "<picture>", "<src>"],
        answer: 0
      },
      {
        q: "Qual atributo define o endereço de uma imagem?",
        opts: ["href", "link", "src", "url"],
        answer: 2
      },
      {
        q: "Qual tag cria um link?",
        opts: ["<link>", "<a>", "<url>", "<button>"],
        answer: 1
      },
      {
        q: "Qual tag cria uma lista não ordenada?",
        opts: ["<ol>", "<list>", "<ul>", "<li>"],
        answer: 2
      },
      {
        q: "Qual tag representa o corpo da página?",
        opts: ["<body>", "<main>", "<html>", "<head>"],
        answer: 0
      },
      {
        q: "Qual tag é usada para criar uma quebra de linha?",
        opts: ["<break>", "<lb>", "<newline>", "<br>"],
        answer: 3
      },
      {
        q: "Qual tag contém informações não visíveis da página?",
        opts: ["<footer>", "<head>", "<body>", "<meta>"],
        answer: 1
      }
    ]
  },

  {
    section: 1,
    questions: [
      {
        q: "O que significa CSS?",
        opts: [
          "Computer Style Sheets",
          "Creative Style System",
          "Cascading Style Sheets",
          "Color Style Sheets"
        ],
        answer: 2
      },
      {
        q: "Qual propriedade altera a cor do texto?",
        opts: ["font-color", "text-color", "color", "background-color"],
        answer: 2
      },
      {
        q: "Qual propriedade altera a cor de fundo?",
        opts: ["background-color", "color", "bg-color", "fill"],
        answer: 0
      },
      {
        q: "Qual propriedade altera o tamanho da fonte?",
        opts: ["font-size", "text-size", "size", "font"],
        answer: 0
      },
      {
        q: "Qual propriedade centraliza texto?",
        opts: ["align", "text-align", "center", "position"],
        answer: 1
      },
      {
        q: "Qual propriedade deixa o texto em negrito?",
        opts: ["font-bold", "text-weight", "font-style", "font-weight"],
        answer: 3
      },
      {
        q: "Qual propriedade adiciona margem externa?",
        opts: ["padding", "spacing", "margin", "border"],
        answer: 2
      },
      {
        q: "Qual propriedade adiciona espaço interno?",
        opts: ["margin", "padding", "border", "gap"],
        answer: 1
      },
      {
        q: "Qual seletor seleciona uma classe?",
        opts: [".classe", "#classe", "*classe", "@classe"],
        answer: 0
      },
      {
        q: "Qual seletor seleciona um ID?",
        opts: [".id", "*id", "@id", "#id"],
        answer: 3
      }
    ]
  },

  {
    section: 2,
    questions: [
      {
        q: "JavaScript é usado principalmente para:",
        opts: [
          "Estilizar páginas",
          "Criar banco de dados",
          "Adicionar interatividade às páginas",
          "Criar imagens"
        ],
        answer: 2
      },
      {
        q: "Como declarar uma variável moderna?",
        opts: ["var", "let", "int", "string"],
        answer: 1
      },
      {
        q: "Qual comando exibe uma mensagem no console?",
        opts: [
          "console.log()",
          "print()",
          "show()",
          "message()"
        ],
        answer: 0
      },
      {
        q: "Qual símbolo representa igualdade estrita?",
        opts: ["=", "==", "===", "=>"],
        answer: 2
      },
      {
        q: "Qual estrutura é usada para repetição?",
        opts: ["if", "for", "switch", "else"],
        answer: 1
      },
      {
        q: "Qual função exibe uma janela de alerta?",
        opts: ["confirm()", "alert()", "prompt()", "show()"],
        answer: 1
      },
      {
        q: "Qual função solicita uma entrada do usuário?",
        opts: ["prompt()", "alert()", "input()", "write()"],
        answer: 0
      },
      {
        q: "Qual método seleciona um elemento pelo ID?",
        opts: [
          "getElementById()",
          "queryClass()",
          "selectId()",
          "getByTag()"
        ],
        answer: 0
      },
      {
        q: "Qual palavra-chave cria uma função?",
        opts: ["method", "function", "func", "create"],
        answer: 1
      },
      {
        q: "Qual evento ocorre ao clicar em um elemento?",
        opts: ["onhover", "onchange", "onclick", "onload"],
        answer: 2
      }
    ]
  }
];

const state = { answers: [{}, {}, {}], checked: [false, false, false] };

function renderAll() {
  DATA.forEach(({ section, questions }) => {
    const container = document.getElementById(`questions-${section}`);
    container.innerHTML = '';
    questions.forEach((q, qi) => {
      const letters = ['A','B','C','D'];
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `card-${section}-${qi}`;
      card.innerHTML = `
        <div class="q-header">
          <div class="q-number">${qi + 1}</div>
          <div class="q-text">${q.q}</div>
        </div>
        <div class="options" id="opts-${section}-${qi}">
          ${q.opts.map((o, oi) => `
  <div class="option" id="opt-${section}-${qi}-${oi}" onclick="selectOption(${section}, ${qi}, ${oi})">
    <div class="option-letter">${letters[oi]}</div>
    <span>${o.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
  </div>
`).join('')}  
        </div>
        <div class="feedback-msg" id="fb-${section}-${qi}"></div>
      `;
      container.appendChild(card);
    });
  });
}

function selectOption(sec, qi, oi) {
  if (state.checked[sec]) return;
  state.answers[sec][qi] = oi;
  
  const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
  opts.forEach((el, idx) => {
    el.classList.toggle('selected', idx === oi);
  });
  updateProgress(sec);
}

function updateProgress(sec) {
  const answered = Object.keys(state.answers[sec]).length;
  const pct = (answered / 10) * 100;
  document.getElementById(`prog-${sec}`).style.width = pct + '%';
}

function checkSection(sec) {
  if (state.checked[sec]) return;
  let score = 0;
  const questions = DATA[sec].questions;
  questions.forEach((q, qi) => {
    const chosen = state.answers[sec][qi];
    const fb = document.getElementById(`fb-${sec}-${qi}`);
    if (chosen === undefined) {
     
      const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
      opts[q.answer].classList.add('correct');
      fb.className = 'feedback-msg show err';
      fb.innerHTML = '⚠️ Não respondida. A alternativa correta está destacada em verde.';
      return;
    }
    const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
    if (chosen === q.answer) {
      opts[chosen].classList.remove('selected');
      opts[chosen].classList.add('correct');
      fb.className = 'feedback-msg show ok';
      fb.innerHTML = '✅ Correto!';
      score++;
    } else {
      opts[chosen].classList.remove('selected');
      opts[chosen].classList.add('wrong');
      opts[q.answer].classList.add('correct');
      fb.className = 'feedback-msg show err';
      fb.innerHTML = `❌ Incorreto. A resposta correta é a alternativa <strong>${['A','B','C','D'][q.answer]}</strong>.`;
    }
  });
  state.checked[sec] = true;
  document.getElementById(`scoreVal-${sec}`).innerHTML = `${score} <span>/ 10</span>`;
  document.getElementById(`prog-${sec}`).style.width = '100%';
}

function resetSection(sec) {
  state.answers[sec] = {};
  state.checked[sec] = false;
  document.getElementById(`scoreVal-${sec}`).innerHTML = `— <span>/ 10</span>`;
  document.getElementById(`prog-${sec}`).style.width = '0%';
  DATA[sec].questions.forEach((_, qi) => {
    const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
    opts.forEach(o => { o.classList.remove('selected','correct','wrong'); });
    const fb = document.getElementById(`fb-${sec}-${qi}`);
    fb.className = 'feedback-msg';
    fb.innerHTML = '';
  });
}


function showTab(idx) {
  document.querySelectorAll('.section').forEach((s, i) => s.classList.toggle('active', i === idx));
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
}

renderAll();