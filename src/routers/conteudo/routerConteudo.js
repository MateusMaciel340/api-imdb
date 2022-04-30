const express = require("express");
const conteudo = express.Router();

// Controllers
const controllerConteudo = require("../../controllers/conteudo/controllerConteudo");

// Middlewares
const permissao = require("../../middlewares/permissao");

conteudo.get("/conteudo",
    controllerConteudo.listarConteudo,
);

conteudo.post("/conteudo",
    permissao, controllerConteudo.postagemConteudo,
);

conteudo.put("/conteudo/:id_conteudo",
    permissao, controllerConteudo.atualizarConteudo,
);

conteudo.delete("/conteudo/:id_conteudo",
    permissao, controllerConteudo.remocaoConteudo,
);

module.exports = conteudo;