import { conexao } from '../conexao.js';

async function pedidiint(pedido) {
    const sql = `INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id ) VALUES (?, ?, ?)`;
    
    const conn = await conexao();
    try {
        const valores = [
            pedido.numero,
            pedido.data_elaboracao,
           pedido.cliente_id,
            
        ];
        const [result] = await conn.query(sql, valores);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { pedidiint };