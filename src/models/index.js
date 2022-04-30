const modelCategoria = require("./conteudo/modelCategoria");
const modelConteudo = require("./conteudo/modelConteudo");

modelCategoria.hasMany(modelConteudo, {
    foreignKey: "categoria_id",
})

modelConteudo.belongsTo(modelCategoria,{
    foreignKey: "categoria_id",
})

module.exports = {
    modelCategoria, modelConteudo,
}