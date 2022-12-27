exports.retornaProdutos = (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos'
    });
}

exports.inserirProdutos = (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: 'Insere um produto',
        produtoCriado: produto
    })
}

exports.DadosExclusivos = (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: 'Produto exclusivo',
        id: id
    });
}

exports.alterarProdutos = (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado com sucesso!'
    });
}

exports.deletarProduto = (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto deletado com sucesso!'
    });
}
