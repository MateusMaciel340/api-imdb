const express = require("express");
const app = express();
const router = require("./routers");
const dotenv = require("dotenv");
const db = require("./databases");
const handleError = require("./middlewares/protecao-erros");

dotenv.config();
const port = process.env.PORT;

app.use(
    express.json(), router, handleError,
);

db.Conexao();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})