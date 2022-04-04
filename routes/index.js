
module.exports = (app) => {

    var conexao = require('../config/database')

    app.get('/', async(req, res) =>{
        conexao()
        var mygrid = require('../models/metas')
        //colocar, ou tirar o // do comentario depois do find()para filtrar o mygrid
        var documentos = await mygrid.find()//.limit(3).sort({'_id':-1})
        res.render('index.ejs', {dados:documentos})
    })


app.post('/', (req, res) => {

    conexao()


var modelo = require('../models/mensagem')

var documento = new modelo({
    nome: req.body.first_name,
    sobrenome: req.body.last_name,
    email: req.body.email,
    mensagem: req.body.message 
})

.save()
.then(()=>{
    res.redirect('/')
})

.catch(() =>{
    res.send("não foi possível gravar o documento no banco de dados")
})
})
}