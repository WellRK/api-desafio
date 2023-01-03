const mongoose = require('mongoose');

const Pedido = mongoose.model('Pedido', {
    nome: String,
    observacao: String
})

module.exports = Pedido