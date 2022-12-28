//Carregando módulos

const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
//const mongoose = require('mongoose')

//Configurações
    // Body Parser
    app.use(express.urlencoded({extended: true}));
    app.use(express.json())

    // Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('View engine', 'handlebars')

    //Mongoose
//Rotas

//Outros
const PORT = 8081
app.listen(PORT, () =>{
    console.log("Servidor rodando na porta "+ PORT)
})