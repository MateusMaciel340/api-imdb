const { modelFavorito } = require("../../models");

const modelUsuario = require("../../models/usuario/modelUsuario");
const modelConteudo = require("../../models/conteudo/modelConteudo");

module.exports = {
    listarMeusFavoritos: async(req, res)=>{
        try{
            const listagemMeusFavoritos = await modelFavorito.findAll({
                where:{
                    usuario_id: req.auth.id_usuario,
                },
                include:[{
                    model: modelUsuario,
                },{
                    model: modelConteudo,
                }]
            });
            res.status(200).json(listagemMeusFavoritos);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!" + error);
        }
    },
    async escolherAosMeusFavoritos(req, res){
        try{
            const { usuario_id, conteudo_id } = req.body;

            const inserirAosFavoritos = await modelFavorito.create({
                usuario_id: req.auth.id_usuario, conteudo_id,
            })

            res.status(201).json(inserirAosFavoritos);
        }catch(error){
            if(error.name == "SequelizeForeignKeyConstraintError"){
                return res.status(500).json("Algum dado foi informado incorretamente!");
            }

            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async removerDosMeusFavoritos(req, res){
        try{
            const { id_favorito } = req.params;

            const validarFavorito = await modelFavorito.findByPk(id_favorito);

            if(!validarFavorito){
                return res.status(400).json("Nenhum item favoritado encontrado!");
            }

            const remocaoDosMeusFavoritos = await modelFavorito.destroy({
                where:{
                    id_favorito,
                }
            })

            res.status(200).json("Conteúdo removido dos favoritados com sucesso!");
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
}