const {conexao} = require('../conexao.js')

async function clientesint(cliente){
    const data = [cliente]
    const sql = `INSERT INTO tbl_cliente (codigo, nome, telefone, limite, id_endereco, id_status) VALUES (?,?,?,?,?,?)`
    const conn = await conexao()
    
      console.log(data)
    try {      const valores = [
      cliente.codigo,
      cliente.nome,
      cliente.telefone,
      cliente.limite,
      cliente.id_endereco,
      cliente.id_status
  ];

        // Executar a consulta
        const [results] = await conn.query(sql,valores);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }

}

module.exports = {clientesint}