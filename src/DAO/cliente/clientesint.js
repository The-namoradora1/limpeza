



const {conexao} = require('../conexao.js')

async function clientesint(cliente){
    const data = [cliente]
    const sql = `INSERT INTO tbl_cliente (codigo, nome, telefone, limite, id_endereco, id_status) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {clientesint}