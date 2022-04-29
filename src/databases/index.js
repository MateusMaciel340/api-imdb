const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const DB_NAME = process.env.BD_NAME;
const DB_USER = process.env.BD_USER;
const DB_PASS = process.env.BD_PASS;
const DB_CONFIG = {
    dialect: "mysql", port: process.env.PORT_CONFIG, host: process.env.HOST_CONFIG,
    define:{
        timestamps: false,
    }
}

let db = {};

try{
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
}catch(error){
    console.error("Erro em sua conexão com o banco de dados " + error);
}

async function Conexao(){
    try{
        await db.authenticate();
        console.log("Banco de dados conectado com sucesso!");
    }catch(error){
        console.error("Erro em sua conexão com o banco de dados" + error);
    }
}

Object.assign(db,{
    Conexao,
})

module.exports = db;