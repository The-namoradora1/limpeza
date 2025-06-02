const express = require('express')
const { buscarClientes } = require('./src/DAO/cliente/buscarClientes.js')
const app = express()
const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')
const { produtod} = require('./src/DAO/produtos/produtod.js')
const { pedidi} = require('./src/DAO/pedido/pedidi')
const { buscarstatus } = require('./src/DAO/status/stattus.js')
const { status } = require('express/lib/response.js')
const { category } = require('./src/DAO/categoria/category.js')
const { endereso } = require('./src/DAO/endereco/endereso.js')

app.get('/empresalimpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
})

app.get('/empresalimpeza/v1/cliente', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.get('/empresalimpeza/v1/produtos', async (req, res) =>{
    let produtos = await produtod()
    res.json(produtos)
})

app.get('/empresalimpeza/v1/pedido', async (req, res) =>{
    let pedido = await pedidi()
    res.json(pedido)
})

app.get('/empresalimpeza/v1/categoria', async (req, res) =>{
    let categoria = await category()
    res.json(categoria)
})

app.get('/empresalimpeza/v1/status', async (req, res) =>{
    let status = await stattus()
    res.json(status)
})


app.get('/empresalimpeza/v1/endereco', async (req, res) =>{
    let endereco = await endereso()
    res.json(endereco)
})

app.get('/empresalimpeza/v1/itempedido', async (req, res) =>{
    let itempedido = await intempedidi()
    res.json(itempedido)
})




app.post('/empresalimpeza/v1/cliente', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.post('/empresalimpeza/v1/produtos', async (req, res) =>{
    let produtos = await produtod()
    res.json(produtos)
})

app.post('/empresalimpeza/v1/pedido', async (req, res) =>{
    let pedido = await pedidi()
    res.json(pedido)
})


const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta)
    testarConexao()
})