const { UnauthorizedError } = require("express-jwt");
const { UniqueConstraintError } = require("sequelize");

module.exports = (error, req, res, next) => {
    if(error instanceof UnauthorizedError){
        return res.status(error.status).json("Não autorizado");
    }
    if(error instanceof UniqueConstraintError){
        return res.status(error.status).json("Dado já existente em nossa base de dados!");
    }

    return res.status(500).json(error.name);
}