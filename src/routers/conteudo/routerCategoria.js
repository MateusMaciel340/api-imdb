const express = require("express");
const categoria = express.Router();

// Controllers
const controllerCategoria = require("../../controllers/conteudo/controllerCategoria");

categoria.get("/categoria",
    controllerCategoria.listarCategoria,
);

categoria.post("/categoria",
    controllerCategoria.postagemCategoria,
);

categoria.put("/categoria/:id_categoria", 
    controllerCategoria.atualizarCategoria,
);

categoria.delete("/categoria/:id_categoria", 
    controllerCategoria.remocaoCategoria,
);

module.exports = categoria;