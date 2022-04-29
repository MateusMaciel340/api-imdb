const express = require("express");
const router = express.Router();

const routerUsuario = require("./usuario/routerUsuario");

router.use(
    routerUsuario,
)

module.exports = router;