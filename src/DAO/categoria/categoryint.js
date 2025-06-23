import { conexao } from '../conexao.js';

async function categoryint(categoria) {
    const sql = `INSERT INTO tbl_categoria (id, nome) VALUES (?, ?)`;
    
    const conn = await conexao();
    try {
        const valores = [
            categoria.id,
            categoria.nome,
             ];

        const [result] = await conn.query(sql, valores);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { categoryint };