const Produto = require("../models/Produtos");

exports.retornaProdutos = (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos'
    });
}

exports.inserirProdutos = async (req, res, next) => {
    const { nome, preco } = req.body
    
    const produto = {
        nome,
        preco
    };

    try {
        await Produto.create(produto)

        res.status(201).json({message: 'Produto inserido com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }

    res.status(201).send({
        mensagem: 'Produto inserido com sucesso',
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
