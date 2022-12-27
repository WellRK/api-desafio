exports.retornaPedidos = (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
}

exports.criarPedidos = (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };
    res.status(201).send({
        mensagem: 'O pedido foi criado com sucesso!',
        pedidoCriado: pedido
    });
}

exports.retornaDadosPedidos = (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Pedido',
        id: id
    });
}

exports.excluirPedidos = (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluído com sucesso'
    });
}


