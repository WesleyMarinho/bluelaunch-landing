# BlueLaunch – Landing Page (Dark + Light)

Landing page moderna, responsiva e focada em conversão para venda de produtos digitais. Possui duas variações de tema: dark e light, com destaque azul.

## Estrutura

```
assets/
  css/
    dark.css
    light.css
  img/
    hero-illustration.svg
  js/
    script.js
index.html          # versão dark (principal)
index-dark.html     # atalho para a dark
index-white.html    # versão light
```

## Como rodar localmente

- Abra `index.html` (dark) ou `index-white.html` (light) em seu navegador.
- Para um servidor simples (opcional), no VS Code use "Live Server" ou rode um servidor HTTP estático.

## Criar repositório no GitHub e publicar

Como não tenho acesso às suas credenciais GitHub daqui, você pode executar estes passos no seu terminal. Substitua `SEU_USUARIO` e `NOME_DO_REPO` conforme desejar.

1) Inicializar o repositório local:

```
git init
git add .
git commit -m "feat: initial landing page (dark + light)"
```

2) Criar o repositório no GitHub (duas opções):

- Via GitHub CLI (gh):
  ```
  gh repo create SEU_USUARIO/NOME_DO_REPO --public --source=. --remote=origin --push
  ```

- Via site do GitHub:
  - Crie o repositório vazio em https://github.com/new
  - Depois conecte e faça push:
    ```
    git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
    git branch -M main
    git push -u origin main
    ```

3) (Opcional) Publicar no GitHub Pages:

- Método branch `gh-pages`:
  ```
  git checkout --orphan gh-pages
  git rm -rf .
  git checkout main -- .
  git commit -m "build: deploy site"
  git push -u origin gh-pages
  ```
  Depois, nas configurações do repositório, em Pages, selecione a branch `gh-pages`.

- Ou usar GitHub Pages na branch `main` em `/root`:
  - Vá em Settings > Pages > Source: `Deploy from a branch` > Branch: `main` > `/root`.

A URL ficará algo como: `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

## Personalização rápida

- Cor primária: altere `--primary` em `assets/css/dark.css` e `assets/css/light.css`.
- Logo/nome: ajuste o bloco `.brand` no HTML.
- Imagens: troque `assets/img/hero-illustration.svg` ou adicione novas imagens.

## Notas

- `index-dark.html` é apenas um atalho/redirect; `index.html` é a fonte principal do tema escuro.
- Se quiser, posso adicionar um switch de tema (dark/light) com `localStorage`.

---
Se preferir, me envie o nome do repositório (e, se usar GitHub CLI, confirme que tem `gh` instalado). Posso fornecer o comando exato já com seu usuário para você colar e publicar.
