const db = require("../../databases");
const { DataTypes } = require("sequelize");

const modelCategoria = require("./modelCategoria");

module.exports = db.define("tb_conteudo",{
    id_conteudo:{
        type: DataTypes.INTEGER, primaryKey: true,
        autoIncrement: true, field: "id_conteudo",
    },
    logo_conteudo:{
        type: DataTypes.STRING, field: "logo_conteudo",
    },
    titulo_conteudo:{
        type: DataTypes.STRING, field: "titulo_conteudo",
    },
    descricao_conteudo:{
        type: DataTypes.TEXT, field: "descricao_conteudo",
    },
    lancamento_conteudo:{
        type: DataTypes.STRING, field: "lancamento_conteudo",
    },
    atores_conteudo:{
        type: DataTypes.TEXT, field: "atores_conteudo",
    },
    tempo_conteudo:{
        type: DataTypes.STRING, field: "tempo_conteudo",
    },
    classificacao_conteudo:{
        type: DataTypes.STRING, field: "classificacao_conteudo",
    },
    categoria_id:{
        type: DataTypes.INTEGER, field: "categoria_id",
        references:{
            model: modelCategoria,
            key: "id",
        }
    }
},{
    tableName: "tb_conteudo",
})