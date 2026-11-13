# SITE ADV — Landing Page Institucional & Design System Jurídico

> Landing page corporativa moderna desenvolvida a partir de engenharia reversa de layout de alto padrão, focada em autoridade visual, tipografia fluida, modularidade e performance sem dependências externas pesadas.

---

## 📌 Visão Geral do Projeto

O **SITE ADV** é uma landing page de alta conversão voltada para escritórios de advocacia e consultorias corporativas. A interface combina uma estética minimalista/editorial com um sistema de design responsivo robusto baseado inteiramente em **CSS Tokens nativos**, **tipografia fluida (`clamp()`)** e **micro-interações progressivas**.

* 🌐 **Demonstração Online:** {espaço para link do projeto}
* 📸 **Captura de Tela:** {espaço para screenshot do projeto}
* 💼 **Nicho / Segmento:** Advocacia Corporativa, Consultoria Jurídica, M&A e Compliance.

---

## 🚀 Principais Funcionalidades & Seções

- [x] **Header Fixo (Glassmorphism):** Navegação fluida com ancoragem suave (`smooth-scroll`) e botão de ação rápida.
- [x] **Hero Section Estratégica:** Split layout de alto impacto com proposta de valor clara e foto institucional.
- [x] **Barra de Prova Social:** Exibição elegante de parceiros e marcas atendidas.
- [x] **Áreas de Atuação (3 Cards):** Grade com elevação suave (`hover-lift`) e micro-animação nas setas de navegação.
- [x] **Seções Alternadas (Z-Pattern):** Quebra de monotonia de leitura para apresentação de metodologia e autoridade profissional.
- [x] **Pilares e Diferenciais:** Três blocos com foco prático em resultados e transparência corporativa.
- [x] **Depoimentos de Clientes (Social Proof):** Cards com sistema de estrelas, depoimentos com ênfase visual e controles para carrossel.
- [x] **Blog & Artigos Recentes (4 Colunas):** Grade de artigos com tags temáticas, datas e chamadas para leitura.
- [x] **Banner de Consulta (CTA):** Caixa em off-white (`#F1F3F7`) com chamada focada em conversão e agendamento.
- [x] **Rodapé Completo:** Seção em tom profundo (`#0E121A`) contendo contatos, links institucionais, registro de OAB e formulário de newsletter.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5 Semântico** | Acessibilidade, SEO e estruturação de dados. |
| **CSS3 Moderno** | Variáveis nativas (`:root`), Grid, Flexbox e `clamp()`. |
| **JavaScript Vanilla** | Interatividade e animações leves via `IntersectionObserver`. |
| **Google Fonts** | Famílias tipográficas *Syne* (títulos) e *Inter* (corpo). |

---

## 🎨 Design System & Tokens CSS

O projeto foi construído para ser 100% customizável através das variáveis declaradas em `style.css`:

```css
:root {
  /* Cores Base */
  --color-bg-base: #ffffff;
  --color-bg-subtle: #f7f8fa;
  --color-surface-dark: #0e121a;
  --color-text-primary: #111622;
  --color-text-secondary: #5a6275;
  --color-accent-badge: #d9383a;
  --color-accent-cyan: #007f8c;

  /* Escala Fluida */
  --text-hero: clamp(2.25rem, 5vw + 0.5rem, 4.25rem);
  --text-h2: clamp(1.75rem, 3.5vw, 2.75rem);
  --section-spacing: clamp(4.5rem, 7vw, 7.5rem);
}
```

---

## 📂 Estrutura de Arquivos

```text
📁 2/
├── 📄 index.html      # Marcação semântica completa em PT-BR
├── 🎨 style.css       # Folha de estilos, tokens CSS e responsividade
├── ⚡ main.js         # Lógica de revelação ao scroll e sliders
└── 📖 README.md       # Documentação técnica e guia de uso
```

---

## 💻 Como Executar Localmente

Como o projeto foi concebido sem frameworks pesados ou gerenciadores de pacotes obrigatórios, basta abrir diretamente no navegador:

1. **Clone ou baixe o repositório:**
   ```bash
   git clone {espaço para url do repositório git}
   cd 2
   ```

2. **Abra o arquivo `index.html` em seu navegador:**
   * Dê um duplo clique no arquivo `index.html`, ou;
   * Utilize a extensão **Live Server** no VS Code / Antigravity IDE para recarregamento em tempo real.

---

## ⚙️ Guia de Personalização

* **Nome e Logo da Empresa:** Altere a classe `.brand-logo` e `.footer-brand` em `index.html`.
* **Cores da Marca:** Modifique os valores de `--color-text-primary`, `--color-accent-badge` ou `--color-accent-cyan` no início de `style.css`.
* **Imagens:** Substitua as URLs das imagens do Unsplash pelas fotos reais da sua equipe e artigos em `index.html`.
* **Contatos & Redes:** Atualize os telefones, e-mails e endereço na seção `<footer class="site-footer">`.

---

## 🗺️ Roadmap & Próximas Melhorias

- [ ] Integração com backend ou serviço de envio de formulários (Formspree, EmailJS ou API própria)
- [ ] Versão com alternância de tema Claro/Escuro (Dark Mode)
- [ ] Máscaras e validação em tempo real para campos de telefone e e-mail
- [ ] {espaço para novas funcionalidades planejadas}

---

## 📄 Licença

Este projeto está sob a licença {espaço para tipo de licença, ex: MIT}. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👤 Autor & Contato

* **Desenvolvedor:** {espaço para seu nome / empresa}
* **E-mail:** {espaço para seu e-mail de contato}
* **LinkedIn:** {espaço para link do LinkedIn}
* **Portfólio:** {espaço para link do portfólio}
