const {conexao} = require('../conexao.js')

async function deletarcategoria(categoria){
    const data = (categoria)
    const sql = `DELETE FROM tbl_categoria WHERE id = ?`
    const conn = await conexao()
    
    try {
        const valores = [
            categoria.id
             ];

        const [results] = await conn.query(sql,valores);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarcategoria}