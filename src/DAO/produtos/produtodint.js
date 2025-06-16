import { conexao } from '../conexao.js';

async function produtodint(produtos) {
    const sql = `INSERT INTO tbl_produtos (codigo,nome, id_categoria, preco ) VALUES (?, ?, ?,?)`;
    
    const conn = await conexao();
    try {

                // Buscar id da categoria pelo nome
                const [categoria] = await conn.query(
                    `SELECT id FROM tbl_categoria WHERE nome = ?`,
                    [produtos.categoria]
                );
        
                if (categoria.length === 0) {
                    throw new Error('Categoria não encontrada');
                }
        
                const id_categoria = categoria[0].id;
        
           
        
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