const express = require('express')
const app = express()

app.listen('3000')

// O navegador não executa o método POST, apenas o GET. Portanto será usado o APP insomnia;
// POST é uma requisição ao navegador para que um conteúdo seja enviado via API
// O ideal é que o conteúdo da requisição esteja em JSON, para isso determinamos o uso de json via método use()
// Essa etapa de determinar o uso de json se chama middleware e serve para transformar os dados recebidos via API

app.use(express.json()) // dessa forma o express sempre irá usar json nos dados requisitados pelo navegador

app.route('/').post((req, res) => console.log(req.body)) // a requisição que temos aqui é que seja enviado ao servidor uma mensagem no console equivalente ao body do navegador. ( no caso do insomnia, o arquivo json será impresso no console do servidor )