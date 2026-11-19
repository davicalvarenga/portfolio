# Portfólio — Davi Alvarenga

Portfólio pessoal em React com visual de **terminal / documentação técnica**: fundo grafite, JetBrains Mono para títulos, navegação e metadados, IBM Plex Sans para o texto corrido, um único destaque em âmbar e verde só para status. Linhas de comando (`$ ls projetos/`) aparecem apenas como rótulos de seção, sem animações além do cursor do hero.

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
    ProjectCard.jsx        # item de lista de projeto (Home e galeria), linha inteira clicável
    Prompt.jsx             # linha de comando usada como rótulo de seção
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
  index.css                # tokens de design (cores e fontes) + cursor do hero
```

## Personalizando

- **Projetos**: edite `src/data/projects.js` — cada item vira um card na galeria e uma página de detalhe em `/projetos/:slug`. Em `links`, `demo` é a URL no ar (ou `null`) e `repos` lista os repositórios públicos; os botões só aparecem quando há link.
- **Perfil**: bio, links sociais, competências, experiência, formação e certificações ficam em `src/data/profile.js`. Telefone e e-mail ficam fora de propósito, porque o repositório é público.
- **Cores/tipografia**: tudo fica centralizado no bloco `@theme` de `src/index.css`.
- **Imagens dos projetos**: hoje os projetos não têm imagem. Para adicionar capturas de tela, coloque os arquivos em `public/projects/` e exiba-os em `ProjectDetail.jsx`.

## Back-end / formulário de contato

O formulário em `/contato` envia um `POST` JSON (`{ name, email, message }`) para a URL definida em `VITE_CONTACT_ENDPOINT` (por exemplo, um webhook do n8n ou um endpoint do Formspree). Crie um `.env.local` na raiz:

```bash
VITE_CONTACT_ENDPOINT=https://seu-endpoint/contato
```

Qualquer resposta 2xx é tratada como sucesso; qualquer outra resposta, erro de rede ou timeout (15 s) mostra uma mensagem de erro. Sem a variável, o formulário não é exibido e a página mostra apenas os links do GitHub e do LinkedIn. O endpoint precisa aceitar CORS da origem do site.
