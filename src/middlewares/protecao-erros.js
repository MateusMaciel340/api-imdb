const { UnauthorizedError } = require("express-jwt");

module.exports = (error, req, res, next) => {
    if(error instanceof UnauthorizedError){
        return res.status(error.status).json(error.name);
    }

    return res.status(500).json(error);
}