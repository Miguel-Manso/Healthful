create database healthfultcc;

use healthfultcc;

CREATE TABLE usuario (
    id_User int identity PRIMARY KEY NOT NULL,
    nome_User varchar (40) unique NOT NULL,
    email_User varchar (30) NOT NULL,
    senha_User varchar (30) NOT NULL,
    dt_nasc varchar (10),
    nivel_User int NOT NULL,
    status_User int,
    data_insert varchar (10),
    data_update varchar (10),
);


CREATE TABLE categoria (
    id_categoria int identity NOT NULL,
    nome_categoria varchar (20) unique NOT NULL,
     status_categoria int,
    data_insert varchar (10),
    data_update varchar (10),
    PRIMARY KEY (id_categoria)
);




CREATE TABLE postagem (
    id_postagem int identity NOT NULL,
    nome_post varchar (20) NOT NULL,
    text_post varchar (8000),
    data_insert varchar (10),
    data_update varchar (10),
    status_post int ,
    FK_id_User int,
    FK_id_categoria int,
    PRIMARY KEY (id_postagem),
    Foreign key (FK_id_User) references usuario (id_User),
    Foreign key (FK_id_categoria) references categoria (id_categoria)
);




CREATE TABLE comentario (
    id_comentario int identity NOT NULL,
    texto_coment varchar (3000),
    status_coment int,
    data_insert varchar (10),
    data_update varchar (10),
    FK_id_User int,
    FK_id_postagem int,
    PRIMARY KEY (id_comentario),
    Foreign key (FK_id_User) references usuario (id_User),
    Foreign key (FK_id_postagem) references postagem (id_postagem)
);

