const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    nome: String,
    preco: String
})

module.exports = Produto