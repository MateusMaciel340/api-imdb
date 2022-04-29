const db = require("../../databases");
const { DataTypes } = require("sequelize");

module.exports = db.define("tb_usuario", {
    id_usuario:{
        type: DataTypes.INTEGER, primaryKey: true,
        autoIncrement: true, field: "id_usuario", 
    },
    nome_usuario:{
        type: DataTypes.STRING, field: "nome_usuario",
    },
    email_usuario:{
        type: DataTypes.STRING, field: "email_usuario",
    },
    senha_usuario:{
        type: DataTypes.STRING, field: "senha_usuario",
    },
    tipo_usuario:{
        type: DataTypes.INTEGER, field: "tipo_usuario",
    },
},{
    tableName: "tb_usuario",
})