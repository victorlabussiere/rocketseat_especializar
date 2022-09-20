const express = require('express') // importação dos métodos express
const app = express() // encapsulamento para o uso dos métodos

app.listen('3000') // criação do server com uso do método listen()

app.route('/').get((req, res) => res.send('Hello World')) 
// o navegador então acessará a rota '/', e dessar rota ele ira pegar requisições ou uma resposta
// Neste caso, recebeu uma mensagem via send() e exibiu na tela

// criamos a ponte aqui
app.use(express.json()) // nessa instrução, estamos mandando toda a aplicação utilizar um método dentro do objeto 'express'. Dessa forma, o conteúdo JSON que chegar através do express já estará pronto para a leitura do JS

app.route('/').post((req, res) => console.log(req.body))
// O navegador realiza uma leitura linear, acessando da esquerda para a direita. Porém, ao chegar no método desejado, aplicará o json() antes de prosseguir.
// Ao chegar no conteúdo, é determinada a ação do navegador: Requisição envia uma mensagem para o terminal e resposta envia uma mensagem para o navegador.
app.route('/').post((req, res) => res.send(req.body))
// A mensagem do body nesse exemplo retorna ao navegador;