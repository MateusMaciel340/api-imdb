const express = require("express");
const conteudo = express.Router();

// Controllers
const controllerConteudo = require("../../controllers/conteudo/controllerConteudo");

conteudo.get("/conteudo",
    controllerConteudo.listarConteudo,
);

conteudo.post("/conteudo",
    controllerConteudo.postagemConteudo,
);

conteudo.put("/conteudo/:id_conteudo",
    controllerConteudo.atualizarConteudo,
);

conteudo.delete("/conteudo/:id_conteudo",
    controllerConteudo.remocaoConteudo,
);

module.exports = conteudo;