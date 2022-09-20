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