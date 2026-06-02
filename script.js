const DATA = [
  // ══ AULA 01 ══
  {
    section: 0,
    questions: [
      {
        q: "Qual é a definição correta de Tecnologia da Informação (TI)?",
        opts: [
          "Conjunto de softwares usados exclusivamente em empresas para gestão de dados",
          "Conjunto de recursos tecnológicos (hardware, software, redes e dados) usados para gerar, processar, armazenar, transmitir e recuperar informações",
          "Área responsável apenas pelo suporte técnico de computadores e impressoras",
          "Linguagem de programação utilizada para criar aplicações web"
        ],
        answer: 1
      },
      {
        q: "Qual das opções a seguir é um exemplo de HARDWARE?",
        opts: ["Sistema Operacional Windows", "Aplicativo Word", "Processador (CPU)", "Driver de impressora"],
        answer: 2
      },
      {
        q: "O que distingue o desenvolvimento Front-End do Back-End?",
        opts: [
          "Front-End cuida do banco de dados e Back-End da interface visual",
          "Front-End desenvolve a interface visual que o usuário vê no navegador; Back-End cria a lógica do servidor, banco de dados e autenticação",
          "Front-End usa Java e Python; Back-End usa HTML e CSS",
          "Não há diferença prática entre as duas áreas"
        ],
        answer: 1
      },
      {
        q: "Quais tecnologias são utilizadas no desenvolvimento Front-End?",
        opts: [
          "Node.js, Python, Java e PHP",
          "MySQL, MongoDB e PostgreSQL",
          "HTML, CSS, JavaScript e React",
          "Docker, Git, Linux e Apache"
        ],
        answer: 2
      },
      {
        q: "Qual é a carga horária TOTAL do curso Programador Front-End do SENAI?",
        opts: ["80 horas", "120 horas", "164 horas", "180 horas"],
        answer: 3
      },
      {
        q: "O que é um Sistema Operacional?",
        opts: [
          "Um aplicativo para criar planilhas e documentos de texto",
          "Uma linguagem de programação usada no desenvolvimento web",
          "O software responsável por gerenciar todos os recursos do computador e permitir que outros programas funcionem",
          "Um hardware responsável pelo processamento de dados"
        ],
        answer: 2
      },
      {
        q: "Qual atalho de teclado é utilizado para DESFAZER uma ação no computador?",
        opts: ["Ctrl + C", "Ctrl + Z", "Ctrl + Y", "Ctrl + X"],
        answer: 1
      },
      {
        q: "No contexto da Matriz Curricular do curso, qual é o Módulo Básico?",
        opts: [
          "Desenvolvimento Web",
          "FrontEnd Essencial",
          "Lógica de Programação",
          "Iniciação à Tecnologia da Informação"
        ],
        answer: 3
      },
      {
        q: "O que é um DRIVER no contexto de software?",
        opts: [
          "Um aplicativo de edição de vídeo",
          "A interface entre o sistema operacional e o hardware, permitindo que o SO controle dispositivos",
          "Um tipo de banco de dados relacional",
          "Um framework JavaScript para criação de interfaces"
        ],
        answer: 1
      },
      {
        q: "Qual atalho de teclado abre o Explorador de Arquivos no Windows?",
        opts: ["Win + D", "Win + L", "Win + E", "Alt + Tab"],
        answer: 2
      }
    ]
  },

  // ══ AULA 02 ══
  {
    section: 1,
    questions: [
      {
        q: "O que é a Estrutura Hierárquica de Diretórios?",
        opts: [
          "Um tipo de banco de dados usado para armazenar registros de usuários",
          "A forma como o sistema operacional organiza arquivos e pastas em uma estrutura de árvore",
          "Um método de compactação de arquivos para economizar espaço em disco",
          "Uma linguagem de marcação para organizar conteúdo em páginas web"
        ],
        answer: 1
      },
      {
        q: "Qual é a função da extensão de arquivo .html?",
        opts: [
          "Armazenar dados estruturados em formato de texto",
          "Definir o estilo visual e o layout de uma página",
          "Representar a estrutura de uma página web",
          "Executar comportamentos e interações na página"
        ],
        answer: 2
      },
      {
        q: "O que representa a extensão .css em um projeto web?",
        opts: ["Comportamento e interação da página", "Estilo visual (cores, fontes, layout)", "Estrutura da página", "Dados estruturados em formato JSON"],
        answer: 1
      },
      {
        q: "Qual lei brasileira regulamenta os Direitos Autorais e a Propriedade Intelectual?",
        opts: ["Lei nº 8.078/90 — Código de Defesa do Consumidor", "Lei nº 12.965/2014 — Marco Civil da Internet", "Lei nº 9.610/98 — Lei de Direitos Autorais", "Lei nº 13.709/18 — LGPD"],
        answer: 2
      },
      {
        q: "O que é o Marco Civil da Internet (Lei nº 12.965/2014)?",
        opts: [
          "Uma lei que proíbe o uso de redes sociais por menores de 18 anos",
          "A lei que estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil",
          "Um regulamento técnico para instalação de infraestrutura de telecomunicações",
          "Uma lei que regulamenta o comércio eletrônico no Brasil"
        ],
        answer: 1
      },
      {
        q: "Qual é a principal característica da licença MIT?",
        opts: [
          "Trabalhos derivados também devem obrigatoriamente ser licenciados como MIT",
          "Proíbe o uso comercial do software",
          "Permite uso comercial, modificação, distribuição e uso privado, exigindo apenas manter o aviso de copyright original",
          "É exclusiva para projetos open-source sem fins lucrativos"
        ],
        answer: 2
      },
      {
        q: "Qual arquivo representa dados estruturados, muito utilizado em APIs web?",
        opts: [".zip", ".png", ".json", ".pdf"],
        answer: 2
      },
      {
        q: "Por quanto tempo os provedores devem guardar logs de conexão segundo o Marco Civil da Internet?",
        opts: ["3 meses", "6 meses a 1 ano", "2 anos", "5 anos"],
        answer: 1
      },
      {
        q: "Segundo a aula, qual é a forma CORRETA de usar imagens de terceiros em projetos sem violar direitos autorais?",
        opts: [
          "Usar qualquer imagem encontrada no Google, pois ela já é pública",
          "Usar bancos de imagens gratuitos (como Unsplash e Pexels), citando sempre a fonte",
          "Baixar imagens de redes sociais, desde que o perfil seja público",
          "Usar qualquer imagem enquanto o projeto não tiver fins comerciais"
        ],
        answer: 1
      },
      {
        q: "Qual das licenças a seguir EXIGE que trabalhos derivados também sejam distribuídos sob a mesma licença?",
        opts: ["MIT", "Creative Commons (CC)", "GPL — GNU General Public License", "BSD License"],
        answer: 2
      }
    ]
  },

  // ══ AULA 03 ══
  {
    section: 2,
    questions: [
      {
        q: "Qual é a definição de Gestão de Projetos apresentada na aula?",
        opts: [
          "O processo de criação de interfaces visuais para aplicativos mobile",
          "A aplicação de conhecimentos, habilidades e técnicas para conduzir um conjunto de tarefas com começo, meio e fim, atingindo objetivos dentro de prazos e recursos definidos",
          "A metodologia usada exclusivamente por grandes empresas de tecnologia para gerenciar equipes",
          "Um sistema de controle de versão distribuído para projetos colaborativos"
        ],
        answer: 1
      },
      {
        q: "Qual metodologia de desenvolvimento é descrita como 'sequencial — cada fase só começa quando a anterior termina'?",
        opts: ["Scrum", "Kanban", "Agile (Ágil)", "Waterfall (Cascata)"],
        answer: 3
      },
      {
        q: "Qual é a principal característica da metodologia Ágil (Agile)?",
        opts: [
          "Escopo fechado e bem definido, sem possibilidade de mudanças",
          "Documentação extensa antes de qualquer implementação",
          "Entregas em ciclos curtos (sprints), adaptável a mudanças e com comunicação intensa com o cliente",
          "Indicada apenas para projetos de pequeno porte com até 3 desenvolvedores"
        ],
        answer: 2
      },
      {
        q: "Qual ferramenta de gestão de projetos foi RECOMENDADA na aula para os alunos iniciantes?",
        opts: ["Jira", "GitHub Projects", "Notion", "Trello"],
        answer: 3
      },
      {
        q: "O que é Controle de Versão?",
        opts: [
          "Um sistema de backup automático que salva cópias de arquivos na nuvem a cada hora",
          "Um sistema que registra cada mudança em arquivos ao longo do tempo, permitindo voltar a versões anteriores e trabalhar em paralelo",
          "Uma metodologia de testes de software para garantir a qualidade do código",
          "Um protocolo de comunicação entre servidores e clientes web"
        ],
        answer: 1
      },
      {
        q: "Qual comando Git inicia o controle de versão em uma pasta?",
        opts: ["git start", "git create", "git init", "git new"],
        answer: 2
      },
      {
        q: "Qual comando Git salva uma versão (snapshot) do projeto com uma mensagem descritiva?",
        opts: ["git save -m 'mensagem'", "git commit -m 'mensagem'", "git push -m 'mensagem'", "git add -m 'mensagem'"],
        answer: 1
      },
      {
        q: "Qual comando Git é usado para ENVIAR os commits locais para o repositório remoto no GitHub?",
        opts: ["git pull origin main", "git fetch origin main", "git sync origin main", "git push origin main"],
        answer: 3
      },
      {
        q: "Para que serve o comando 'git status'?",
        opts: [
          "Mostra o histórico completo de todos os commits realizados",
          "Cria um novo branch no repositório",
          "Mostra o estado dos arquivos (modificados, novos ou preparados para commit)",
          "Verifica a conexão com o repositório remoto"
        ],
        answer: 2
      },
      {
        q: "Qual é a vantagem das BRANCHES no Git?",
        opts: [
          "Permitem aumentar a velocidade de processamento do computador durante o desenvolvimento",
          "Permitem testar ideias e implementar funcionalidades sem quebrar o projeto principal",
          "Servem para compactar o código antes de fazer o deploy",
          "São usadas exclusivamente para criar releases oficiais do software"
        ],
        answer: 1
      }
    ]
  },


];

// ── State ──
const state = { answers: [{}, {}, {}, {}], checked: [false, false, false, false] };

// ── Render questions ──
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
              <span>${o}</span>
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
  // Update UI
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
      // not answered
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

// ── Tabs ──
function showTab(idx) {
  document.querySelectorAll('.section').forEach((s, i) => s.classList.toggle('active', i === idx));
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
}

renderAll();