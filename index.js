const express = require('express')
const { buscarClientes } = require('./src/DAO/cliente/buscarClientes.js')
const app = express()
const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')
const { produtod} = require('./src/DAO/produtos/produtod.js')
const { pedidi} = require('./src/DAO/pedido/pedidi')
const {  stattus } = require('./src/DAO/status/stattus.js')
const { category } = require('./src/DAO/categoria/category.js')
const { endereso } = require('./src/DAO/endereco/endereso.js')

const { itempedidoin} = require('./src/DAO/itempedido/itempedidoin.js')
const { endin } = require('./src/DAO/endereco/endin.js')
const{categoryint} = require('./src/DAO/categoria/categoryint.js')
const {pedidiint} = require ('./src/DAO/pedido/pedidiint.js')
const {produtodint} = require ('./src/DAO/produtos/produtodint.js')
const {stattusint} = require ('./src/DAO/status/stattusint.js')
const {clientesint} = require('./src/DAO/cliente/clientesint.js')

app.use(
    express.urlencoded({
        extended: true
    }));
app.use(express.json());
    

app.get('/empresalimpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
});

app.get('/empresalimpeza/v1/cliente', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
});

app.get('/empresalimpeza/v1/produtos', async (req, res) =>{
    let produtos = await produtod()
    res.json(produtos)
});

app.get('/empresalimpeza/v1/pedido', async (req, res) =>{
    let pedido = await pedidi()
    res.json(pedido)
});

app.get('/empresalimpeza/v1/categoria', async (req, res) =>{
    let categoria = await category()
    res.json(categoria)
});

app.get('/empresalimpeza/v1/status', async (req, res) =>{
    let status = await stattus()
    res.json(status)
});


app.get('/empresalimpeza/v1/endereco', async (req, res) =>{
    let endereco = await endereso()
    res.json(endereco)
});

app.get('/empresalimpeza/v1/itempedido', async (req, res) =>{
    let itempedido = await itempedidi()
    res.json(itempedido)
});


//POST


app.post('/empresalimpeza/v1/cliente', async (req, res) =>{
    let {codigo, telefone, nome, limite, id_endereco, id_status } = req.body

    let data = {codigo, telefone, nome, limite, id_endereco, id_status }

    console.log(data)
    let clientes = await buscarClientes(data)
    res.json(clientes)
});



app.post('/empresalimpeza/v1/produtos', async (req, res) =>{

let {codigo,nome, id_categoria, preco } = req.body

    let data = {codigo,nome, id_categoria, preco }

    console.log(data)
    let produtos = await produtod(data)
    res.json(produtos)
});


app.post('/empresalimpeza/v1/endereco', async (req, res) =>{
    let {id, logradouro , cep, numero , bairro , cidade } = req.body

    let data = {id, logradouro , cep, numero , bairro , cidade }

    console.log(data)
    let endereco = await endin(data)
    res.json(endereco)
})
;
app.post('/empresalimpeza/v2/status', async (req, res) =>{
      let {id, nome} = req.body

    let data = {id, nome }

    console.log(data)
    let status = await stattus(data)
    res.json(status)
});

app.post('/empresalimpeza/v1/categoria', async (req, res) =>{

        let {id, nome } = req.body

    let data = {id, nome }

    console.log(data)
    let categoria = await categoryint(data)
    res.json(categoria)
});

app.post('/empresalimpeza/v1/itempedido', async (req, res) => {

        let { id, id_pedido, id_produto, qnt } = req.body

    let data = { id, id_pedido, id_produto, qnt }

    console.log(data)

    let itempedido = await itempedidoin()
    res.json(itempedido)
});

app.post('/empresalimpeza/v1/pedido', async (req, res) => {

        let { numero, data_elaboracao, cliente_i } = req.body

    let data = { numero, data_elaboracao, cliente_i }

    console.log(data)

    let pedido = await pedidiint(data)
    res.json(pedido)
});




const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta)
    testarConexao()
});