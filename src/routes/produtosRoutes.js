const express = require('express');
const pedidosRouter = express.Router();
const ProdutosController = require('../controllers/Produtos-controller')

// Retorna os produtos
pedidosRouter.get('/', ProdutosController.retornaProdutos);

// Insere um produto
pedidosRouter.post('/produtos', ProdutosController.inserirProdutos);


// Retorna os dados do produto
pedidosRouter.get('/:id_produto', ProdutosController.DadosExclusivos);

// Altera um produto
pedidosRouter.patch('/', ProdutosController.alterarProdutos);

// Deleta um produto
pedidosRouter.delete('/', ProdutosController.deletarProduto);

module.exports = pedidosRouter;


