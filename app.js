const express = require ('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, X-Resquested-With, Content-Type, Accept, Authorization');

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
            return res.status(200).send({});
        }
        next();

})


app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);


app.use('/teste', (req,res, next) => {
    res.status(200).send({
        mensagem: 'Está funcionando!'
    });

});

// Tratamento de erro para rotas não encontradas
app.use((req, res, next) => {
    const erro = new Error("Não encontrado")
    erro.status = 404;
    next(erro);
});


app.use((error, req,res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;