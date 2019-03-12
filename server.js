// INSTALAÇÃO DO EXPRESS.
    // CRIAÇÃO DO SERVIDOR.
        //  CONFIGURAÇÃO DA PORTA 3000.

var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(3000,function() {
    console.log(' Servidor rodando na porta: ' + this.address().port);
})