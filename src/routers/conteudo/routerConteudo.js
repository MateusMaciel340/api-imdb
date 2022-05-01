const express = require("express");
const conteudo = express.Router();

// Controllers
const controllerConteudo = require("../../controllers/conteudo/controllerConteudo");

// Middlewares
const permissao = require("../../middlewares/permissao");

conteudo.get("/conteudo",
    permissao, controllerConteudo.listarConteudo,
);

conteudo.get("/conteudo/:id_conteudo",
    permissao, controllerConteudo.buscarConteudo,
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