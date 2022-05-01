const db = require("../../databases");
const { DataTypes } = require("sequelize");

const modelUsuario = require("../usuario/modelUsuario");
const modelConteudo = require("../conteudo/modelConteudo");

module.exports = db.define("tb_favorito",{
    id_favorito:{
        type: DataTypes.INTEGER, autoIncrement: true,
        primaryKey: true, field: "id_favorito",
    },
    usuario_id:{
        type: DataTypes.INTEGER, field: "usuario_id",
        references:{
            model: modelUsuario,
            key: "id",
        },
    },
    conteudo_id:{
        type: DataTypes.INTEGER, field: "conteudo_id",
        references:{
            model: modelConteudo,
            key: "id",
        },
    },
},{
    tableName: "tb_favorito",
})