create database healthful;

use healthful;

CREATE TABLE usuario (
    idUser int identity (1,1) PRIMARY KEY NOT NULL,
    nomeUser varchar (40) unique NOT NULL,
    emailUser varchar (30) NOT NULL,
    senhaUser varchar (30) NOT NULL,
    dtNasc varchar (10),
    nivelUser int NOT NULL,
    statusUser int,
    dataInsert varchar (10),
    dataUpdate varchar (10),
);


CREATE TABLE categoria (
    idCategoria int identity (1,1) NOT NULL,
    nomeCategoria varchar (20) unique NOT NULL,
     statusCategoria int,
    dataInsert varchar (10),
    dataUpdate varchar (10),
    PRIMARY KEY (idCategoria)
);




CREATE TABLE postagem (
    idPost int identity (1,1) NOT NULL,
    nomePost varchar (20) NOT NULL,
    textPost varchar (8000),
    dataInsert varchar (10),
    dataUpdate varchar (10),
    statusPost int ,
    FK_idUser int,
    FK_idCategoria int,
    PRIMARY KEY (idPost),
    Foreign key (FK_idUser) references usuario (idUser),
    Foreign key (FK_idCategoria) references categoria (idCategoria)
);




CREATE TABLE comentario (
    idComent int identity (1,1) NOT NULL,
    textoComent varchar (3000),
    statusComent int,
    dataInsert varchar (10),
    dataUpdate varchar (10),
    FK_idUser int,
    FK_idPost int,
    PRIMARY KEY (idComent),
    Foreign key (FK_idUser) references usuario (idUser),
    Foreign key (FK_idPost) references postagem (idPost)
);

