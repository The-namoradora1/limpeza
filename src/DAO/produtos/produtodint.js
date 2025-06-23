import { conexao } from '../conexao.js';

async function produtodint(produtos) {
    const sql = `INSERT INTO tbl_produtos (codigo,nome, id_categoria, preco ) VALUES (?, ?, ?,?)`;
    
    const conn = await conexao();
    try {
    
        const valores = [
            produtos.codigo,
            produtos.nome,
           produtos.id_categoria,
           produtos.preco
            
        ];
        const [result] = await conn.query(sql, valores);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { produtodint};