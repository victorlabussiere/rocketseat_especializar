const express = require('express') // importação dos métodos express
const app = express() // encapsulamento para o uso dos métodos

app.listen('3000') // criação do server com uso do método listen()

app.route('/').get((req, res) => res.send('Hello World')) 
// o navegador então acessará a rota '/', encontrará uma resposta ou requisição com o get
// e receberá uma mensagem como resposta através do res.send()