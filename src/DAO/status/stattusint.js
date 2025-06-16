import { conexao } from '../conexao.js';

async function stattusint(status) {
    const sql = `INSERT INTO tbl_status (id, nome) VALUES (?, ?)`;
    
    const conn = await conexao();
    try {
        const valores = [
            status.id,
            status.nome,
                      
        ];
        const [result] = await conn.query(sql,valores);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { stattusint};