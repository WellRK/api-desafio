const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/Produtos-controller')

// Retorna os produtos
router.get('/', ProdutosController.retornaProdutos);

// Insere um produto
router.post('/', ProdutosController.inserirProdutos);


// Retorna os dados do produto
router.get('/:id_produto', ProdutosController.DadosExclusivos);

// Altera um produto
router.patch('/', ProdutosController.alterarProdutos);

// Deleta um produto
router.delete('/', ProdutosController.deletarProduto);

module.exports = router;


