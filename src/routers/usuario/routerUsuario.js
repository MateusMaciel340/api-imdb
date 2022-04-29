const express = require("express");
const usuario = express.Router();

const controllerUsuario = require("../../controllers/usuario/controllerUsuario");

usuario.get("/usuario", 
    controllerUsuario.listarUsuario,
);

usuario.post("/usuario",
    controllerUsuario.postagemUsuario,
);

usuario.put("/usuario/:id_usuario",
    controllerUsuario.atualizacaoUsuario,
);

usuario.delete("/usuario/:id_usuario", 
    controllerUsuario.remocaoUsuario,
);

module.exports = usuario;