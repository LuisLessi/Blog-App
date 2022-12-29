//Carregando módulos

const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const exp = require('constants')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require ('connect-flash')

//Configurações
    //Sessão
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })
    // Body Parser
    app.use(express.urlencoded({extended: true}));
    app.use(express.json())

    // Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('View engine', 'handlebars')

    //Mongoose
    mongoose.set("strictQuery", true);
    mongoose.connect('mongodb://127.0.0.1:27017/blogapp').then(() =>{
        console.log("Conectado com sucesso")
    }).catch((err) =>{
        console.log("Erro ao se conectar ao servidor: " + err)
    });

    // Public
    app.use(express.static(path.join(__dirname, "public")))

//Rotas
    app.use('/admin', admin)

//Outros
const PORT = 8081
app.listen(PORT, () =>{
    console.log("Servidor rodando na porta "+ PORT)
})