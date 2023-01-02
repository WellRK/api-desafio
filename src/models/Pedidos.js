const mongoose = require('mongoose');

const Pedido = mongoose.model('Pedido', {
    nome: String,
    Observacao: String
})

module.exports = Pedido