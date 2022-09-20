const express = require('express')
const app = express()

app.listen('3000')
app.use(express.json())

app.route('/').post( (req, res) => {            // requisição
    let body = req.body                         // RESPONSE: objeto body dentro da requisição
    res.send(console.log(body))
})