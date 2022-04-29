const modelUsuario = require("../../models/usuario/modelUsuario");
const bcrypt = require("bcryptjs");

module.exports = {
    listarUsuario: async(req, res)=>{
        try{
            const listagemUsuario = await modelUsuario.findAll();
            res.status(200).json(listagemUsuario);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async postagemUsuario(req, res){
        try{
            const { 
                nome_usuario, email_usuario, senha_usuario, tipo_usuario } = req.body;

            const novaSenha = bcrypt.hashSync(senha_usuario, 10);

            const inserirUsuario = await modelUsuario.create({
                nome_usuario, email_usuario, senha_usuario: novaSenha, tipo_usuario,
            })

            res.status(201).json(inserirUsuario);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async atualizacaoUsuario(req, res){
        try{
            const { id_usuario } = req.params;
            const { nome_usuario, email_usuario, tipo_usuario } = req.body;

            const atualizacaoUsuario = await modelUsuario.update({
                nome_usuario, email_usuario, tipo_usuario,
            },{
                where:{
                    id_usuario,
                }
            });

            res.status(200).json(`O usuário ${nome_usuario} foi atualizado com sucesso!`);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async remocaoUsuario(req, res){
        try{
            const { id_usuario } = req.params;

            const removerUsuario = await modelUsuario.destroy({
                where:{
                    id_usuario,
                }
            })

            res.status(200).json("Usuário removido com sucesso!");
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
}