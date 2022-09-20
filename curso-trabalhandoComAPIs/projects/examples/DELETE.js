const express = require('express')
const app = express()
app.listen('3000')

app.use(express.json())


app.route('/:id').delete((req, res) => {    // client REQUEST to server rout and method
    res.send(req.params.id)                 // server REPONSE to client roud params id
    res.send(console.log(req.params.id))    // server REPONSE to client console.log command
})