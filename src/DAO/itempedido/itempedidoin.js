import { conexao } from '../conexao.js';

async function itempedidoin(itempedido) {
    const sql = `INSERT INTO tbl_itempedido (id, id_pedido, id_produto, qnt) VALUES (?, ?, ?,?)`;
    
    const conn = await conexao();
    try {
        const valores = [
            itempedido.id,
            itempedido.id_pedido,
           itempedido.id_produto,
           itempedido.qnt,
           
        ];
        const [result] = await conn.query(sql, valores);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { itempedidoin };