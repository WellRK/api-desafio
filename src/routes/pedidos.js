const express = require('express');
const router = express.Router();
const PedidosController = require('../controllers/pedidos-controller')


// Retorna os pedidos
router.get('/', PedidosController.retornaPedidos);

// Insere um pedido
router.post('/', PedidosController.criarPedidos);


// Retorna os dados do pedido
router.get('/:id_pedido', PedidosController.retornaDadosPedidos);

// Deleta o pedido
router.delete('/', PedidosController.excluirPedidos);

module.exports = router;


