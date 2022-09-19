const express = require('express') // importação dos métodos express
const app = express() // encapsulamento para o uso dos métodos

app.listen('3000') // criação do server com uso do método listen()

app.route('/').get((req, res) => res.send('content shown')) 
// o navegador então acessará a rota '/', e dessar rota ele ira pegar requisições ou uma resposta
// Neste caso, recebeu uma mensagem via send() e exibiu na tela