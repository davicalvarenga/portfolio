# Portfólio — Davi Alvarenga

Portfólio pessoal em React com visual **editorial escuro**: fundo quase preto em tom quente, títulos em serifa (Fraunces), texto em Instrument Sans, um único destaque em laranja-tijolo e verde só para status. Os projetos aparecem com conteúdo visual real: captura de tela do Graphs-Code, diagrama do fluxo das automações e uma miniatura do framework de candidaturas.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) para as rotas
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`), com os tokens de design (cores, tipografia, espaçamento) definidos em `src/index.css`
- [oxlint](https://oxc.rs/docs/guide/usage/linter) para lint

## Rotas

| Rota | Página |
|---|---|
| `/` | Home — hero, projetos em destaque, CTA de contato |
| `/projetos` | Galeria de projetos, com filtro por categoria (Web/Automação/Ferramentas) |
| `/projetos/:slug` | Detalhe de um projeto (desafio, solução, stack técnica) |
| `/habilidades` | Competências, experiência, formação e certificações |
| `/contato` | Formulário de contato (ou canais diretos, se o endpoint não estiver configurado) |
| `*` | Página 404 |

## Rodando localmente

```bash
npm install
npm run dev
```

Outros scripts disponíveis:

```bash
npm run build    # build de produção
npm run preview  # serve o build de produção localmente
npm run lint     # roda o oxlint
```

## Estrutura do projeto

```
src/
  layouts/Layout.jsx       # Navbar + Footer + <Outlet/>
  components/
    Navbar.jsx
    Footer.jsx
    ProjectCard.jsx        # bloco de projeto (Home e galeria): visual + texto, alternando lados
    ProjectVisual.jsx      # escolhe o visual do projeto (imagem, diagrama, miniatura ou stack)
    FlowDiagram.jsx        # diagrama do fluxo GLPI → n8n → Nextcloud Talk (lista vertical no celular)
    DocMockup.jsx          # miniatura ilustrativa do framework de candidaturas
    StatusBadge.jsx        # status do projeto (verde = em produção / no ar)
    buttonStyles.js        # classes compartilhadas dos botões
  data/projects.js         # conteúdo dos projetos (edite aqui para add/editar projetos)
  data/profile.js          # bio, links sociais, competências, experiência e formação
  pages/
    Home.jsx
    Projects.jsx
    ProjectDetail.jsx
    Skills.jsx
    Contact.jsx
    NotFound.jsx
  index.css                # tokens de design (cores e fontes)
```

## Personalizando

- **Projetos**: edite `src/data/projects.js` — cada item vira um card na galeria e uma página de detalhe em `/projetos/:slug`. Em `links`, `demo` é a URL no ar (ou `null`) e `repos` lista os repositórios públicos; os botões só aparecem quando há link.
- **Perfil**: bio, links sociais, competências, experiência, formação e certificações ficam em `src/data/profile.js`. Telefone e e-mail ficam fora de propósito, porque o repositório é público.
- **Cores/tipografia**: tudo fica centralizado no bloco `@theme` de `src/index.css`.
- **Visual dos projetos**: o campo `visual` de cada projeto em `src/data/projects.js` aceita `{ type: "image", src, alt }` (arquivo em `public/projects/`), `{ type: "flow" }`, `{ type: "doc" }` ou `null` (mostra a stack em tipografia).
- **Números da Home**: ficam em `stats`, em `src/data/profile.js`.

## Back-end / formulário de contato

O formulário em `/contato` envia um `POST` JSON (`{ name, email, message }`) para a URL definida em `VITE_CONTACT_ENDPOINT` (por exemplo, um webhook do n8n ou um endpoint do Formspree). Crie um `.env.local` na raiz:

```bash
VITE_CONTACT_ENDPOINT=https://seu-endpoint/contato
```

Qualquer resposta 2xx é tratada como sucesso; qualquer outra resposta, erro de rede ou timeout (15 s) mostra uma mensagem de erro. Sem a variável, o formulário não é exibido e a página mostra apenas os links do GitHub e do LinkedIn. O endpoint precisa aceitar CORS da origem do site.
