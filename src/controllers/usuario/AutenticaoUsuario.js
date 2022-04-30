const modelUsuario = require("../../models/usuario/modelUsuario");
const jwt = require("jsonwebtoken");
const secret = require("../../configs/secret");
const bcrypt = require("bcryptjs");

module.exports = {
    async autenticao_login(req, res){
        try{
            const { email_usuario, senha_usuario } = req.body;

            const autenticacao = await modelUsuario.findOne({
                where:{
                    email_usuario,
                }
            });

            if(!autenticacao || !bcrypt.compareSync(senha_usuario, autenticacao.senha_usuario)){
                return res.status(400).json("Email ou senha incorreta!");
            }

            const token = jwt.sign({
                id_usuario: autenticacao.id_usuario,
                nome_usuario: autenticacao.nome_usuario,
                email_usuario: autenticacao.email_usuario,
                userType: "user",
            }, secret.key);

            return res.status(200).json(token);

        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
}