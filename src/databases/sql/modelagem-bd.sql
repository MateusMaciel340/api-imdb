CREATE DATABASE bd_imdb;

USE bd_imdb;

CREATE TABLE tb_usuario (
    id_usuario INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(60),
    email_usuario VARCHAR(60) UNIQUE,
    senha_usuario VARCHAR(80),
    tipo_usuario INTEGER
);

CREATE TABLE tb_categoria (
    id_categoria INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    logo_categoria VARCHAR(255),
    titulo_categoria VARCHAR(40),
    descricao_categoria LONGTEXT
);

CREATE TABLE tb_conteudo (
    id_conteudo INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    logo_conteudo VARCHAR(255),
    titulo_conteudo VARCHAR(60),
    descricao_conteudo LONGTEXT,
    lancamento_conteudo VARCHAR(40),
    atores_conteudo LONGTEXT,
    tempo_conteudo VARCHAR(6),
    classificacao_conteudo VARCHAR(20),
    categoria_id INTEGER,
    CONSTRAINT conteudo_categoria FOREIGN KEY
    (categoria_id) REFERENCES categoria(id_categoria)
);

CREATE TABLE tb_favorito (
    id_favorito INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usuario_id INTEGER,
    conteudo_id INTEGER,
    CONSTRAINT favorito_usuario FOREIGN KEY
    (usuario_id) REFERENCES usuario(id_usuario),
    CONSTRAINT favorito_conteudo FOREIGN KEY
    (conteudo_id) REFERENCES conteudo(id_conteudo)
);

