<img src="./public/images/lagomarca-positiva-background.png" alt="remember logo">

# remember

Um aplicativo voltado para casais que desejam guardar momentos especiais e lembranças de sua história e poder ver tudo isso em uma linha do tempo.

Este projeto oferece uma interface de usuário desenvolvida com Next.js e Tailwind para a API de uma página de linha do tempo em Node.js para a disciplina de **Desenvolvimento Full Stack Avançado** do programa de pós-graduação em Desenvolvimento
Full Stack da [PUC-Rio](https://www.puc-rio.br/index.html).

## Screenshots

<div align="center">
  <img style="width: 100%; float: left;" src="./public/images/screenshot-1.png" alt="My Project GIF">
</div>

<div style="clear: both; margin-bottom: 28px;"></div>

## Design da UI no Figma

Clique [aqui](https://www.figma.com/file/LzmrgQhMM9FRWNr9KKECdP/Remember?type=design&node-id=24%3A9431&mode=design&t=M1w0crDfKkarrZtB-1) para visualizar o design da interface no Figma.

## Technologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [GitHub OAuth](https://docs.github.com/pt/developers/apps/building-oauth-apps/authorizing-oauth-apps)

## Como executar

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e uma conta no [Github](https://github.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/eliasmatheus/remember-app-web

# Acesse a pasta do projeto no terminal/cmd
$ cd remember-app-web

# Instale as dependências
$ npm install

# Copie o arquivo .env.example e renomeie para .env.local
$ cp .env.example .env.local

# Preencha o arquivo .env.local com o Client ID do seu Github OAuth App, conforme instruções abaixo em "Conectando o frontend com o backend"

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação inciará na porta:3000
```

Abra o endereço [http://localhost:3000/](http://localhost:3000/) para acessar a aplicação.

### Rodando o backend

Para rodar o servidor, acesse o repositório do [backend](https://github.com/eliasmatheus/remember-app-server) e siga as instruções.

### Conectando o frontend com o backend

Para conectar o frontend com o backend, é necessário criar um arquivo `.env.local` na raiz do projeto de acordo com o arquivo `.env.example` e preencher a variável `NEXT_PUBLIC_GITHUB_CLIENT_ID` com o _Client ID_ do seu Github OAuth App.

Para conseguir um _Client ID_ do Github OAuth App, siga as instruções [deste link](https://docs.github.com/pt/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app).

> ⚠️ **Atenção**
>
> O campo `Authorization callback URL` deve ser preenchido com o endereço de autenticação da aplicação (api/auth/callback). Este é o endereço que para o qual o Github irá redirecionar o usuário após a autenticação.
>
> Se o frontend estiver rodando em localhost:3000, a URL deve ser: `http://localhost:3000/api/auth/callback`.

Após criado, seu _Client ID_ estará disponível na página do seu OAuth App. Copie e cole o valor do _Client ID_ no arquivo `.env.local`:

```bash
NEXT_PUBLIC_GITHUB_CLIENT_ID=cole-aqui-o-client-id
```

A variável `NEXT_PUBLIC_API_URL` já vem preenchida com o endereço da API do backend rodando na porta `3333`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3333
```

Altere esta variável caso a API esteja rodando em outra porta ou endereço.
