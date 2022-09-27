const express = require('express')
const app = express()
app.listen('3000')

app.route('/').get((req, res) => {
    res.send(req.query)                     // retorna a variável na request do navegador;
    res.send(console.log(req.query.nome))   // retorna uma variável especifica dentro da request do navegador;
})