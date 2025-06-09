import { conexao } from '../conexao.js';

async function clientesint(cliente) {
    const sql = `INSERT INTO tbl_cliente (codigo, telefone, nome, limite, id_endereco, id_status) VALUES (?, ?, ?, ?, ?, ?)`;
    
    const conn = await conexao();
    try {
        // Executar a consulta
        const [result] = await conn.query(sql, [clientesint]);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { clientesint};