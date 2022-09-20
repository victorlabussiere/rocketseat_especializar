# Curso - Trabalhando com APIs 
## Início
### Por que aprender API? 
- Nos ajudam a trocar informações entre sistemas;
- Não necessáriamente sistemas fechados entre uma mesma empresa;
- É possível acessar sistemas públicos e trabalhar com suas informaçãoes;
- Exemplo: login com o google;
- A sua principal funcionalidade é promover comunicação entre sistemas de forma *PADRONIZADA*.

### O que é API? 
- Serviço de requerimentos que promove a comunicação entre cliente e servidor;
- Responsável pelo fluxo de requisições e respostas de um sistema;
- Exemplo real:
- - *Customer* <= Submit oredr / Response => *Online Store* <= Contact / Response => *Payment Gateway*

### JSON - Conhecendo o formato
- JSON é um formato de arquivo leve feito para troca de dados;
- Fácil para humanos lerem e escreverem e para máquinas extrair dados interessantes pro sistema;
- Pode ser usado por qualquer linguagem;
- Referências: json.org/json-en.html

```json
{
    "nome": "meu nome", 
    "cidade": "minha cidade",
    "telefone": 21999999999,
    "livros_favoritos": [
        "LIVRO 1",
        "LIVRO 2",
        "LIVRO 3"
    ],
    "hobbies": {
        "semanal": "hobby semanal",
        "fins_de_semana": { 
            "sabado": "hobby de sabado",
            "domingo": "hobby de domingo",
            "outros": [     
                "caminhada",
                "volei",
                "netflix"
            ]    
        } // os valores das chaves não podem conter espaços
    }
    
}
```
- Dessa forma, criar um arquivo para ser consumido por um API torna-se simples para se escrever e ler, e rápido para uma máquina rastrear as informações.

### Métodos HTTP - Métodos presentes no próprio navegador
- GET: É responsável por realizar um requerimento pelo navegador.
- POST: É usado quando se deseja enviar informações para uma API;
- DELETE: É usado para passar identificadores, para uma API, de um registro que deve ser apagado;
- PUT: É usado para enviar atualizações para um servidor através de uma API;
- PATCH: Também é usado para realiar atualizações via API. A diferença para o PUT é que o PATCH envia apenas atualizações de um único registro enquanto o PUT pode enviar multiplos registros a serem atualizados por vez.

### Insominia
- Programa que será usado durante o curso para realizar as requisições pelo navegador.
- É um site com recursos básicos como criar coleções de requisições
- Por padrão, só é possível realizar o método GET através do navegador. O uso do Insominia permite realizar as demais requisições e métodos HTTP;

## API no backend
### Instalando pacote NPM com node
- npm init -y em uma nova pasta para criar um projeto do curso;

### Express
- Conjunto de arquivo com códigos que será baixado para o projeto Node;
- Baixaremos recursos desse framework para auxiliar no momento de criar uma aplicação;
- Framework para aplicativos web;
- Possui métodos HTTPS

### Criando Server
* Iniciando express com require()
  - Após a instlação do framework Expresse, é necessário importar o módulo para alguma aplicação JS

```js
const express = require('express') // importação dos métodos express
const app = express() // encapsulamento para o uso dos métodos

app.listen('3000') // criação do server com uso do método listen()
```
### .GET
* Criando rotas:
  - O navegador só entende a rota GET() e exibe o conteúdo na tela
  - Para criar um conteúdo utilizamos o método express .route('/') -> a '/' é o padrão index do navegador;
    - o método route() indicará o caminho que o navegador irá fazer e o que encontrará nele;
  - Quando o navegador encontrar a rota desejada, ele receberá outro método, o get(), que irá apresentar argumentos que retornarão para ele novas requisições ou uma resposta;
  - Podemos linkar novos métodos nos argumentos do get de acordo com a necessidade do sistema. Como exemplo, será enviado uma resposta ao navegador através do método send('content shown')

```js 
// arquivo GTE.js
app.route('/').get((req, res) => res.send('content shown')) 
// o navegador então acessará a rota '/', e dessar rota ele ira pegar requisições ou uma resposta
// Neste caso, recebeu uma mensagem via send() e exibiu na tela
```

### .POST
* Criando post()
  - O navegador não executa o método post, para isso, será usado o aplicativo insomnia;
  - Ao interpretar o código, o insomnia poderá receber, postar, atualizar e executar outros métodos HTTP disponíveis.
  - O post é uma requisição feita ao navegador para a postagem de um conteúdo em um servidor;
  - O ideal é que o conteúdo enviado via POST esteja em JSON
  - Ao acessar a rota da requisição, ele passará por um processo onde os seus dados serão convertidos para objetos JS;
  - Essa etapa se chama * middleware * e utiliza o método express use()

```js

// arquivo POST.js
// O navegador não executa o método POST, apenas o GET. Portanto será usado o APP insomnia;
// POST é uma requisição do navegador
// O ideal é que o conteúdo da requisição esteja em JSON, para isso determinamos o uso de json via método use()
// Essa etapa de determinar o uso de json se chama MIDDLEWARE e serve para transformar os dados recebidos via API de json para objetos ou de objetos para json;
app.use(express.json())

app.route('/').post((req, res) => console.log(req.body)) // a requisição que temos aqui é que seja enviado ao servidor uma mensagem no console equivalente ao body do navegador. ( no caso do insomnia, o arquivo json será impresso no console do servidor )
```
### .PULL
* O que é? 
  - É um método que serve para atualizar informações no servidor;

```js

//arquivo PUT.js
const express = require('express')
const app = express()
app.listen('3000')                  // dando início ao servidor localhost:3000;
app.use(express.json())             // middleware

let author = "Victor"               // criando dados para o servidor;

app.route('/').put((req, res) => {  
    console.log(`author do servidor ANTES da response: ${author}`)
    author = req.body.author        // REQUIRE: servidor busca um dado no navegador;
    console.log(`author ATUALIZADO com a response: ${author}`)
    res.send(author)                // RESPOSTA: navegador envia uma msg para o servidor;
})

```

### .DELETE
* Delete uma informação no servidor
  - Método para deletar uma informação;
  - Efetua a busca de um elemento através de identificadores registrados em parâmetros na rout da requisição
  - Envia como resposta um method para apagar aquele parâmetro identificado

```js

// arquivo DELETE.js
app.route('/:id').delete((req, res) => {    // client faz REQUEST do método delete
    res.send(req.params.id)                 // server RESPONDE com um REQUEST do identificador
    res.send(console.log(req.params.id))    // A partir desse identificador é possível realizar métodos
}) // nesse caso, o método usado dentro do delete foi um console.log() mas pode ser um método para deletar algum id específico;

```
## Parâmetros nas requisições HTTP
### O que são parâmetros
* São formas de passar para o nosso código informações que não estavam lá antes
  - São requisições feitas para API cujo o nome técnico é Parâmetro

### Body Params:
* É uma forma de enviar informações para uma API sem que fiquem na URL; 
  - Ele é o corpo dentro de uma requisição POST, PUSH ou PATCH;
  - Dentro dele conterá as informações desejadas de acordo com o método em json,=;
  - É no código do servidor que ocorre a tradução do json para objeto e objeto para json

* Exemplificando:
```js 
// arquivo body_params
app.route('/').post( (req, res) => {            // requisição
    let body = req.body                         // RESPONSE: objeto body dentro da requisição
    res.send(console.log(body))
})
```

### Route Params:
* Como pegar parâmetros pela rota?
  - Para buscar parâmetros pela rota, criamos uma variável no momento da requisição route()
   - a criação de uma variável se faz com ":" e o nome da variável => :variavel;
  - O envio da resposta depende da requisição na URL do navegador;

* Exemplo:
```js 

// arquivo route_params.js
app.route('/').get((req, res) => res.send('Olá'))       // requisição sem variável;
app.route('/:var').get((req, res) => {                  // requisição com variável no parâmetro da URL;
    res.send(req.params.var)                            // A resposta usa essa variável;
})

```
  - Importante: o uso de '/' após a variável indica uma nova rota para o navegador fazer requisição.

### Query Params:
* Outra forma de passar parâmetros pela URL.
  - Querys são identificados na URL através da '?';
   - Dessa forma, podemos criar a variável pelo navegador dando valores para variáveis;
  - Podemos adicionar outras variáveis usando '&';
  - Portanto o Servidor recebe a variável pronta do client e retorna dentro do métod HTTP;
* Exemplo:
```js 

app.route('/').get( (req, res) => res.send( req.query ))      // retorna a variável na request do navegador
app.route('/').get( (req, res) => res.send( req.query.nome )) // retorna uma variável marcada pelo navegador;

```
## Consumindo API com NodeJS
* A API a ser consumida será do Github;

### Consumindo com AXIOS;
- O Express é um pacote que cria APIs mas não faz novos requerimentos
  - Sendo assim, usaremos a ferramenta axios para realizar novos requerimentos pelo servidor;
- Para instalar o axios via npm basta realizar o seguinte comando no terminal:

```
npm i axios
```
* Axios instalado!
- Feito isso, basta importar para o arquivo desejado e usar o seu recurso de request HTTP;
  - Para consumir a API do github foi usado o método get();
   - O resultado da request no axios já vem formatado pelo método json();
```js 

// arquivo githubAPI.js
const express = require('express')
const app = express()
const axios = require('axios')                                      // importação dos métodos axios

app.listen('3000')                                                  // criação do servidor
app.use(express.json())                                             // middleware

app.route('/').get((req, res) => {                                 // REQUEST do navegador;
    axios.get('https://api.github.com/users/victorlabussiere')      // RESPONSE do servidor é uma promise;
        .then(result => res.send(result.data.name))                 // a promise retorna um 'result' que será usado como RESPONSE do navegador para o client
        .catch(error => console.error(error))
})

```
