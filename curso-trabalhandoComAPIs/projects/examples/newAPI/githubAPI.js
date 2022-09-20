const express = require('express')
const app = express()
const axios = require('axios')                                      // importação dos métodos axios

app.listen('3000')                                                  // criação do servidor
app.use(express.json())                                             // middleware

app.route('/').get((req, res) => {                                 // REQUEST do navegador;
    axios.get('https://api.github.com/users/victorlabussiere')      // RESPONSE do servidor é uma promise;
        .then(result => res.send(result.data.name))                 // a promise retorna um 'result' que será usado como RESPONSE do navegador para o client
        .catch(error => console.error(error))
})