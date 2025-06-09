import { conexao } from '../conexao.js';

async function pedidiint(pedido) {
    const sql = `INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id ) VALUES (?, ?, ?)`;
    
    const conn = await conexao();
    try {
        // Executar a consulta
        const [result] = await conn.query(sql, [pedidiint]);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { pedidiint };