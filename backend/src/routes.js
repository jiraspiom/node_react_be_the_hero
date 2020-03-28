const express = require("express");
const OngController = require("./controllers/OngController")
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post("/sessions", SessionController.create)

routes.get("/ongs", OngController.index)
routes.post("/ongs", OngController.create)

routes.get("/profile", ProfileController.index)

routes.get("/incidents", IncidentController.index)
routes.post("/incidents", IncidentController.create)
routes.delete("/incidents/:id", IncidentController.delete)


//users/19
routes.get("/users/:id", (requisicao, resposta) => {
    const params = requisicao.params;
    console.log(params)

    resposta.json({
        nome: "gilmar",
        sobrenome: "borges"

    })
})

//user?nome=gilmar&sobrenome=borges&idade=40
routes.get("/user", (req, res) => {
    const params = req.query;

    console.log(params)

})

routes.post("/users", (requisicao, resposta) => {
    const params = requisicao.body;
    console.log(params)

    resposta.json({ nome: "gimar", sobrenome: "teste" })

})



module.exports = routes;