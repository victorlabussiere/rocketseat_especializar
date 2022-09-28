const experess = require('express')
const app = experess()

app.listen('3000')
app.use(experess.json())

app.route('/').get((req, res) => res.send('Olá'))       // requisição sem variável;
app.route('/:var').get((req, res) => {                  // requisição com variável no parâmetro da URL;
    res.send(req.params.var)                            // A resposta usa essa variável;
})