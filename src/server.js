const express = require("express");
const app = express();
const router = require("./routers");
const dotenv = require("dotenv");
const db = require("./databases");

dotenv.config();
const port = process.env.PORT;

app.use(
    express.json(), router, 
);

db.Conexao();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})