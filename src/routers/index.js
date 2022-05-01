const express = require("express");
const router = express.Router();

const routerUsuario = require("./usuario/routerUsuario");
const routerCategoria = require("./conteudo/routerCategoria");
const routerConteudo = require("./conteudo/routerConteudo");
const routerFavorito = require("./conteudo/routerFavorito");

router.use(
    routerUsuario, routerCategoria, routerConteudo, routerFavorito,
)

module.exports = router;