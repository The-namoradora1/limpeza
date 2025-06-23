const {conexao} = require('../conexao.js')

async function deletarcliente(cliente){
    const data = (cliente)
    const sql = `DELETE FROM tbl_cliente WHERE codigo = ?`
    const conn = await conexao()
    
    try {
        const valores = [
            cliente.codigo
             ];

        const [results] = await conn.query(sql,[valores]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarcliente}