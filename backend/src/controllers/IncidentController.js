const conection = require("../../src/database/connection")

module.exports = {

    async index(requisicao, resposta) {
        const { page = 1 } = requisicao.query;

        const [count] = await conection("incidents").count();

        const incidents = await conection("incidents")
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1 ) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        resposta.header('X-Total-Quantidade', count['count(*)'])

        return resposta.json(incidents);
    },

    async create(requisicao, resposta) {
        const { title, description, value } = requisicao.body;

        const ong_id = requisicao.headers.autorizacao;

        const [id] = await conection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return resposta.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.autorizacao;

        const incidents = await conection("incidents")
            .where('id', id)
            .select("ong_id")
            .first();

        if (incidents.ong_id != ong_id) {
            return res.status(401).json({ error: "Operacao nao permitida" });
        }

        await conection("incidents").where("id", id).delete();

        return res.status(204).send();
    }

};
