# API DE CADASTRO DE USUÁRIOS

## Descrição:

<p>
    Nesta API criada com Node.js, foi implementado o CRUD (create, read, update, delete), para criação,
    listagem e deleção de usuários. Só não foi implementado o método update.
    Todos os testes foram feitos no insomnia, foram utilizadas bibliotecas fundamentais para o funcionamento
    desta API e vou listar algumas delas abaixo.
</p>

Bibliotecas utilizadas:

> cors: para auxiliar nas requisições HTTP e na origem de onde o site é acessado;
> uuid: para geração de um id único para cada usuário criado;
> express: para gerenciar os diferentes tipos de requisições HTTP;

<br>
<br>

## 💻 Tecnologia utilizada :

<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>

<br>

### Como rodar:

> npm start

### Como clonar:

> git clone https://github.com/gGtEriKk/firstProjectNodeDevClub.git

<br>

<p>
    Abaixo está um vídeo de demonstração em formato GIF, onde iniciei o servidor pelo terminal, fiz os testes pelo insomnia, onde utilizei uma porta local.
    Neste teste, foram criados dois usuários e para cada um foi gerado um id diferente.
    Depois fiz a requisição da listagem destes usuários, onde podemos ver todos os detalhes com id, name e age (nome e idade).
    Por último, peguei um dos usuários e deletei através do id, colocando este id junto à URL e o usuário foi deletado
    com sucesso.
</p>

<img src="./assets/Video-de-demonstracao.gif"/>

<br>
<br>

## API desenvolvida por:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/gGtEriKk">
        <img src="https://avatars.githubusercontent.com/u/101311661?v=4" width=100px; alt="foto do perfil"><br>
          <sub>
            <b>Erik Gomes</b>
          </sub>
      </a>
</table>