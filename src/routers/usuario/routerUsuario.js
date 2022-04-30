const express = require("express");
const usuario = express.Router();

// Controllers
const controllerUsuario = require("../../controllers/usuario/controllerUsuario");
const autenticacaoUsuario = require("../../controllers/usuario/AutenticaoUsuario");

usuario.get("/usuario", 
    controllerUsuario.listarUsuario,
);

usuario.post("/login",
    autenticacaoUsuario.autenticao_login,
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