const express = require('express');
const server = express()

server.use('/api', function(req, res, next) {
    console.log('inicio...')
    next()
    console.log('Fim...')
})

server.use('/api', function(req, res) {
    console.log('Resposta...')
    res.send('<h1>Hello</h1>')
})

server.listen(3002, () => console.log('Executando...'))