const conection = require("../database/connection")

module.exports = {

    async index(req, res) {
        const ong_id = req.headers.autorization;

        const incidents = await conection("incidents")
            .where("ong_id", ong_id)
            .select("*");

        return res.json(incidents)

    }

}