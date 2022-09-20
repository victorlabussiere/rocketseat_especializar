const express = require('express')
const app = express()
app.listen('3000')

// O navegador não executa o método POST, apenas o GET. Portanto será usado o APP insomnia;
// REQUISIÇÃO SEMPRE VEM DO NAVEGADOR!
// O ideal é que o conteúdo da requisição esteja em JSON, para isso determinamos o uso de json via método use()
// Essa etapa de determinar o uso de json se chama MIDDLEWARE e serve para transformar os dados recebidos via API de json para objetos ou de objetos para json;
app.use(express.json())

app.route('/').post((req, res) => console.log(req.body)) // a requisição que temos aqui é que seja enviado ao servidor uma mensagem no console equivalente ao body do navegador. ( no caso do insomnia, o arquivo json será impresso no console do servidor )