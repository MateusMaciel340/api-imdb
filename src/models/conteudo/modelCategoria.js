const db = require("../../databases");
const { DataTypes } = require("sequelize");

module.exports = db.define("tb_categoria", {
    id_categoria:{
        type: DataTypes.INTEGER, primaryKey: true,
        autoIncrement: true, field: "id_categoria",
    },
    logo_categoria:{
        type: DataTypes.STRING, field: "logo_categoria",
    },
    titulo_categoria:{
        type: DataTypes.STRING, field: "titulo_categoria",
    },
    descricao_categoria:{
        type: DataTypes.TEXT, field: "descricao_categoria",
    },
},{
    tableName: "tb_categoria",
})