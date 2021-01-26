const express = require('express');
const server = express()

server.get('/', function(req, res, next) {
    console.log('inicio...')
    next()
    console.log('Fim...')
})

server.get('/', function(req, res) {
    console.log('Resposta...')
    res.send('<h1>Hello World</h1>')
})

server.listen(3003, () => console.log('Executando...'))