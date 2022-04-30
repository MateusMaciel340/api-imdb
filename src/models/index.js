const modelCategoria = require("./conteudo/modelCategoria");
const modelConteudo = require("./conteudo/modelConteudo");
const modelFavorito = require("./conteudo/modelFavoritos");
const modelUsuario = require("./usuario/modelUsuario");

// Categoria e Conteúdo
modelCategoria.hasMany(modelConteudo, {
    foreignKey: "categoria_id",
})

modelConteudo.belongsTo(modelCategoria,{
    foreignKey: "categoria_id",
})

// Usuário e Favorito
modelUsuario.hasMany(modelFavorito,{
    foreignKey: "usuario_id",
})

modelFavorito.belongsTo(modelUsuario,{
    foreignKey: "usuario_id",
})

// Conteúdo e Favorito
modelConteudo.hasMany(modelFavorito,{
    foreignKey: "conteudo_id",
})

modelFavorito.belongsTo(modelConteudo,{
    foreignKey: "conteudo_id",
})

module.exports = {
    modelCategoria, modelConteudo, modelUsuario, modelFavorito,
}