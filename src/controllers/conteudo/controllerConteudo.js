const modelConteudo = require("../../models/conteudo/modelConteudo");
const { modelCategoria } = require("../../models");

module.exports = {
    listarConteudo: async(req, res)=>{
        try{
            const listagemConteudo = await modelConteudo.findAll({
                include: modelCategoria,
            });
            res.status(200).json(listagemConteudo);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async postagemConteudo(req, res){
        try{
            const {
                logo_conteudo, titulo_conteudo, descricao_conteudo, categoria_id,
            } = req.body;

            if(req.auth.tipo_usuario === 1){
                const postarConteudo = await modelConteudo.create({
                    logo_conteudo, titulo_conteudo, descricao_conteudo, categoria_id,
                })

                res.status(201).json(postarConteudo);
            }else{
                res.status(400).json("Você não tem funcionalidades de administrador!");
            }
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async atualizarConteudo(req, res){
        try{
            const { id_conteudo } = req.params;

            const {
                logo_conteudo, titulo_conteudo, descricao_conteudo, categoria_id,
            } = req.body;

            const validarConteudo = await modelConteudo.findByPk(id_conteudo);

            if(!validarConteudo){
                return res.status(400).json("Esse conteúdo não existe!");
            }

            if(req.auth.tipo_usuario === 1){
                const atualizacaoConteudo = await modelConteudo.update({
                    titulo_conteudo, descricao_conteudo, categoria_id,
                },{
                    where:{
                        id_conteudo,
                    }
                })
    
                res.status(200).json(`O conteúdo ${titulo_conteudo} foi atualizado com sucesso!`);
            }else{
                res.status(400).json("Você não tem funcionalides de administrador!");
            }
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async remocaoConteudo(req, res){
        try{
            const { id_conteudo } = req.params;

            const validarConteudo = await modelConteudo.findByPk(id_conteudo);

            if(!validarConteudo){
                return res.status(400).json("Esse conteúdo não existe!");
            }

            if(req.auth.tipo_usuario === 1){
                const removerConteudo = await modelConteudo.destroy({
                    where:{
                        id_conteudo,
                    }
                })
    
                res.status(200).json("O conteúdo foi removido com sucesso!");
            }else{
                res.status(400).json("Você não tem funcionalidades de administrador!");
            }
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
}