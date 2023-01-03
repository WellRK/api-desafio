const express = require('express');
const router = express.Router();
const PedidosController = require('../controllers/pedidosController')


// Retorna os pedidos
router.get('/pedidos', PedidosController.retornaPedidos);

// Insere um pedido
router.post('/pedidos', PedidosController.criarPedidos);


// Retorna os dados do pedido especifico 
router.get('/pedidos/:id', PedidosController.retornaDadosPedidos);

// Deleta o pedido
router.delete('/pedidos/:id', PedidosController.excluirPedidos);

module.exports = router;


