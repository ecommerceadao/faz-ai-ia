// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
          nav.classList.toggle('open');
    });

  nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Ano no footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = `© ${new Date().getFullYear()} faz aí_ia`;
}

// Terminal do hero: simula um comando sendo executado pela IA
const terminalLines = [
  { html: '<span class="prompt">você@negócio</span> <span class="dim">~$</span> preciso de mais vendas no e-commerce' },
  { html: '<span class="prompt">faz-ai-ia</span> <span class="dim">~$</span> analisando funil<span class="cursor"></span>' },
  { html: '<span class="ok">✓</span> <span class="dim">diagnóstico de funil concluído</span>' },
  { html: '<span class="ok">✓</span> <span class="dim">3 automações de recuperação de carrinho criadas</span>' },
  { html: '<span class="ok">✓</span> <span class="dim">campanhas de tráfego pago ajustadas por performance</span>' },
  { html: '<span class="prompt">faz-ai-ia</span> <span class="dim">~$</span> operação rodando 24/7<span class="cursor"></span>' },
  ];

const terminalBody = document.getElementById('terminalBody');

function typeTerminal() {
    if (!terminalBody) return;
    terminalBody.innerHTML = '';

  let delay = 300;
    terminalLines.forEach((line, i) => {
          const div = document.createElement('div');
          div.className = 'terminal-line';
          div.innerHTML = line.html;
          div.style.animationDelay = `${delay}ms`;
          terminalBody.appendChild(div);
          delay += 550;
    });
}

typeTerminal();

// Reobserva e reinicia a animação quando o terminal volta a ficar visível
if ('IntersectionObserver' in window && terminalBody) {
    const terminalEl = document.querySelector('.terminal');
    const observer = new IntersectionObserver(
          (entries) => {
                  entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                        typeTerminal();
                            }
                  });
          },
      { threshold: 0.4 }
        );
    if (terminalEl) observer.observe(terminalEl);
}
