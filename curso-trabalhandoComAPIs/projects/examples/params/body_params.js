const express = require('express')
const app = express()

app.listen('3000')
app.use(express.json())

const pessoa = {
    "nome": "Victor",
    "sobrenome": "Labussiere",
    "profissao": "dev",
}
console.log(pessoa)                              // objeto registrado no servidor

app.route('/').post( (req, res) => {            // requisição
    let body = req.body                         // RESPONSE: objeto body dentro da requisição
    res.send(console.log(body))
})