const express = require('express') // importação do express
const app = express() // encapsulamento dos métodos express

app.listen('3000') // criação de um localhost via express

app.route('/').get((req, res) => res.send('Hello World via get API'))