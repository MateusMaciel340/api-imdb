const express = require("express");
const favorito = express.Router();

// Controllers
const controllerFavorito = require("../../controllers/conteudo/controllerFavorito");

// Middlewares
const permissao = require("../../middlewares/permissao");

favorito.get("/favorito",
    permissao, controllerFavorito.listarMeusFavoritos,
);

favorito.post("/favorito",
    permissao, controllerFavorito.escolherAosMeusFavoritos,
);

favorito.delete("/favorito/:id_favorito",
    permissao, controllerFavorito.removerDosMeusFavoritos,
);

module.exports = favorito;