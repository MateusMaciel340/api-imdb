const express = require("express");
const router = express.Router();

const routerUsuario = require("./usuario/routerUsuario");
const routerCategoria = require("./produto/routerCategoria");

router.use(
    routerUsuario, routerCategoria,
)

module.exports = router;