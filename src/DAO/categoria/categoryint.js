import { conexao } from '../conexao.js';

async function categoryint(categoria) {
    const sql = `INSERT INTO tbl_categoria (id, nome) VALUES (?, ?, )`;
    
    const conn = await conexao();
    try {
        // Executar a consulta
        const [result] = await conn.query(sql, [categoria]);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { categoryint };