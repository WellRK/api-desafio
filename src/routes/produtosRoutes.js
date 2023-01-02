const express = require('express');
const pedidosRouter = express.Router();
const ProdutosController = require('../controllers/produtosController')

// Retorna os produtos
pedidosRouter.get('/produtos', ProdutosController.retornaProdutos);

// Insere um produto
pedidosRouter.post('/produtos', ProdutosController.inserirProdutos);


// Retorna os dados do produto
pedidosRouter.get('/produtos/:id', ProdutosController.DadosExclusivos);

// Altera um produto
pedidosRouter.patch('/produtos/:id', ProdutosController.alterarProdutos);

// Deleta um produto
pedidosRouter.delete('/produtos/:id', ProdutosController.deletarProduto);

module.exports = pedidosRouter;


