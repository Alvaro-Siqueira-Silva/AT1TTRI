const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    texto: String,
    enviado: { type: Date, default: Date.now}
})

const metas = mongoose.model('metas', modelo)

module.exports = metas