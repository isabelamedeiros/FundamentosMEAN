const express = require('express');
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes')) // Receber a lista
    .post((req, res) => res.send('Novo Clientes')) // Criando um novo objeto
    .put((req, res) => res.send('Altera Cliente')) // Alterando um cliente que ja existencia
    .delete((req, res) => res.send('Remove Cliente')) //Excluir um cliente da base


server.listen(3001, () => console.log('Executando...'))