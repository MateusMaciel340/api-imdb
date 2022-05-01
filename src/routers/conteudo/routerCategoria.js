const express = require("express");
const categoria = express.Router();

// Controllers
const controllerCategoria = require("../../controllers/conteudo/controllerCategoria");

// Middlewares
const permissao = require("../../middlewares/permissao");

categoria.get("/categoria",
    permissao, controllerCategoria.listarCategoria,
);

categoria.get("/categoria/:id_categoria",
    permissao, controllerCategoria.buscarCategoria,
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