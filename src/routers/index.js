const express = require("express");
const router = express.Router();

const routerUsuario = require("./usuario/routerUsuario");
const routerCategoria = require("./conteudo/routerCategoria");
const routerConteudo = require("./conteudo/routerConteudo");

router.use(
    routerUsuario, routerCategoria, routerConteudo,
)

module.exports = router;