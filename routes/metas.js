module.exports = (app)=>{
    var conexao = require('../config/database')

    conexao()
    
    var metas = require('../models/metas')

    app.get('/metas',async(req,res)=>{
        var resultado = await metas.find()
        res.render('metas.ejs',{dados:resultado})
        console.log(resultado)
    })

    app.post('/metas',(req,res)=>{
        var documento = new metas({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{res.redirect('/metas')})
        .catch(()=>{res.send('não foi possível gravar')})
    })
}

