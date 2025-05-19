const {conexao} = require('../conexao.js')


async function produtod(){
    const sql = `SELECT * FROM tbl_produtos`;
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

module.exports = {produtod}