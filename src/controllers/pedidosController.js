const Pedido = require("../models/Pedidos");

exports.retornaPedidos = async (req, res, next) => {
    const { nome, observacao } = req.body
    
    const pedido = {
        nome,
        observacao
    };

    try {
        const pedidos = await Pedido.find()
        res.status(200).json(pedidos)

        res.status(201).json({message: 'Pedidos retornados com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }
}

exports.criarPedidos = async (req, res, next) => {
    const { nome, observacao } = req.body
    
    const pedido = {
        nome,
        observacao
    };

    try {
        await Pedido.create(pedido)

        res.status(201).json({message: 'Pedido inserido com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }
}

exports.retornaDadosPedidos = async (req, res, next) => {
    const id = req.params.id
    
    try {
        const pedido = await Pedido.findOne({ _id: id})
        res.status(201).json(pedido)

    } catch (error) {
        res.status(500).json({error: error})
    }

}

exports.excluirPedidos = async (req, res, next) => {
    const id = req.params.id
    const pedido = await Pedido.findOne({ _id: id})  
    
    if(!pedido){
        res.status(422).json({message: "Pedido não encontrado!"})
    }

    try {
             
        await pedido.deleteOne({_id: id})
        res.status(201).send({
            mensagem: 'Pedido deletado com sucesso!'
        });

    } catch (error) {
        res.status(500).json({error: error})
    }
}


