const express = require("express");
const categoria = express.Router();

// Controllers
const controllerCategoria = require("../../controllers/conteudo/controllerCategoria");

// Middlewares
const permissao = require("../../middlewares/permissao");

categoria.get("/categoria",
    controllerCategoria.listarCategoria,
);

categoria.post("/categoria",
    permissao, controllerCategoria.postagemCategoria,
);

categoria.put("/categoria/:id_categoria", 
    permissao, controllerCategoria.atualizarCategoria,
);

categoria.delete("/categoria/:id_categoria", 
    permissao, controllerCategoria.remocaoCategoria,
);

module.exports = categoria;