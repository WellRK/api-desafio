const express = require('express');
const router = express.Router();



// Retorna os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Testando GET da rota de produtos'
    });

});

// Insere um produto
router.post('/', (req, res, next) => {
    
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: 'Insere um produto',
        produtoCriado: produto
    })

});


// Retorna os dados do produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: 'Produto exclusivo',
        id: id
    });
})

// Altera um pedido
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado com sucesso!'
    });
});

// Deleta um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto deletado com sucesso!'
    });
});

module.exports = router;


