const express = require('express')
const app = express()
app.listen('3000')

app.route('/:id').delete((req, res) => {
    res.send(req.params.id)
    console.log(req.params.id)
})