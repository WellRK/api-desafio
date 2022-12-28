const express = require ('express');
const app = express();
const morgan = require('morgan');

const mongoose = require('mongoose');
const Produto = require('./models/Produtos')

//const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



const rotaProdutos = require('./routes/Produtos');
const rotaPedidos = require('./routes/Pedidos');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan('dev'));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

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


const DB_USER = 'wellrk'
const DB_PASSWORD = encodeURIComponent('1234')


mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.iawbgmv.mongodb.net/test`
    )
    .then(() => {
        console.log('Conectado ao MongoDB!')
        app.listen(3000)

    })
    .catch((err) => console.log(err))



module.exports = app;

// 11