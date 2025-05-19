const express = require('express')
const { buscarClientes } = require('./src/DAO/cliente/buscarClientes.js')
const app = express()
const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')
const { produtod} = require('./src/DAO/produtos/produtod.js')
const { pedidi} = require('./src/DAO/pedido/pedidi')

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



const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta)
    testarConexao()
})