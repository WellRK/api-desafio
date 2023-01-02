const Produto = require("../models/Produtos");

exports.retornaProdutos = async (req, res, next) => {
    const { nome, preco } = req.body
    
    const produto = {
        nome,
        preco
    };

    try {
        const produtos = await Produto.find()
        res.status(200).json(produtos)

        res.status(201).json({message: 'Produtos retornados com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }

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

}

exports.DadosExclusivos = async (req, res, next) => {
    const id = req.params.id
    
    try {
        const produto = await Produto.findOne({ _id: id}) 
        res.status(201).json(produto)

    } catch (error) {
        res.status(500).json({error: error})
    }

    res.status(200).send({
        mensagem: 'Produto exclusivo',
        id: id
    });
}

exports.alterarProdutos = async (req, res, next) => {
    const id = req.params.id
    const { nome, preco } = req.body
    const produto = {
        nome,
        preco
    };
    
    try {
        const updateProduto = await Produto.updateOne({ _id: id}, produto)       
        
        res.status(201).json(produto)
        
        res.status(201).send({
            mensagem: 'Produto alterado com sucesso!'
        });

    } catch (error) {
        res.status(500).json({error: error})
    }
    
    
}

exports.deletarProduto = async (req, res, next) => {
    const id = req.params.id
    const produto = await Produto.findOne({ _id: id})  
    
    if(!produto){
        res.status(422).json({message: "Usuário não encontrado!"})
    }

    try {
             
        await produto.deleteOne({_id: id})
        res.status(201).send({
            mensagem: 'Produto deletado com sucesso!'
        });

    } catch (error) {
        res.status(500).json({error: error})
    }
    
}
