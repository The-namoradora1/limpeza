import { conexao } from '../conexao.js';

async function endin(endereco) {
    const sql = `INSERT INTO tbl_endereco (id, logradouro, cep, numero, bairro, cidade)
                 VALUES (?, ?, ?, ?, ?, ?)`;

    const conn = await conexao();
    try {
        const valores = [
            endereco.id,
            endereco.logradouro,
            endereco.cep,
            endereco.numero,
            endereco.bairro,
            endereco.cidade
        ];

        const [result] = await conn.query(sql, valores);
        await conn.end();
        return result;
    } catch (err) {
        await conn.end();
        return err.message;
    }
}

export { endin };
