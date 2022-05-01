const modelCategoria = require("../../models/conteudo/modelCategoria");

module.exports = {
    listarCategoria: async(req, res)=>{
        try{
            const listagemCategoria = await modelCategoria.findAll();
            res.status(200).json(listagemCategoria);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async postagemCategoria(req, res){
        try{
            const {
                logo_categoria, titulo_categoria, descricao_categoria,
            } = req.body;

            if(req.auth.tipo_usuario === 1){
                const postarCategoria = await modelCategoria.create({
                    logo_categoria, titulo_categoria, descricao_categoria,
                });
    
                res.status(201).json(postarCategoria);
            }else{
                res.status(400).json("Você não tem funcionalidades de administrador!");
            }
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async atualizarCategoria(req, res){
        try{
            const { id_categoria } = req.params;
            const {
                logo_categoria, titulo_categoria, descricao_categoria,
            } = req.body;

            const validarCategoria = await modelCategoria.findByPk(id_categoria);

            if(!validarCategoria){
                return res.status(400).json("Essa categoria não existe!");
            }

            if(req.auth.tipo_usuario === 1){
                const atualizacaoCategoria = await modelCategoria.update({
                    logo_categoria, titulo_categoria, descricao_categoria,
                },{
                    where:{
                        id_categoria,
                    }
                })

                res.status(200).json(`A categoria ${titulo_categoria} foi atualizada com sucesso!`);
            }else{
                res.status(400).json("Você não tem funcionalidades de administrador!");
            }
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async remocaoCategoria(req, res){
        try{
            const { id_categoria } = req.params;

            const validarCategoria = await modelCategoria.findByPk(id_categoria);

            if(!validarCategoria){
                return res.status(400).json("Essa categoria não existe!");
            }

            if(req.auth.tipo_usuario === 1){
                const removerCategoria = await modelCategoria.destroy({
                    where:{
                        id_categoria,
                    }
                })

                res.status(200).json("A categoria foi removida com sucesso!");
            }else{
                res.status(400).json("Você não tem funcionalidades de administrador!");
            }

        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
}