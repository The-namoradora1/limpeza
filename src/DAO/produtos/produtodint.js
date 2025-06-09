import { conexao } from '../conexao.js';

async function produtodint(produtos) {
    const sql = `INSERT INTO tbl_produtos (codigo,nome, id_categoria, preco ) VALUES (?, ?, ?,?)`;
    
    const conn = await conexao();
    try {
        // Executar a consulta
        const [result] = await conn.query(sql, [produtodint]);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { produtodint};