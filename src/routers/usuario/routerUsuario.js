const express = require("express");
const usuario = express.Router();

// Controllers
const controllerUsuario = require("../../controllers/usuario/controllerUsuario");
const autenticacaoUsuario = require("../../controllers/usuario/AutenticaoUsuario");

// Middlewares
const permissao = require("../../middlewares/permissao");

usuario.get("/usuario", 
    permissao, controllerUsuario.listarUsuario,
);

usuario.post("/login",
    autenticacaoUsuario.autenticao_login,
);

usuario.post("/usuario",
    controllerUsuario.postagemUsuario,
);

usuario.put("/usuario/:id_usuario",
    permissao, controllerUsuario.atualizacaoUsuario,
);

usuario.delete("/usuario/:id_usuario", 
    permissao, controllerUsuario.remocaoUsuario,
);

module.exports = usuario;