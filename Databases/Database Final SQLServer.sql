create database healthful;

use healthful;

CREATE TABLE usuario (
    idUser int identity (1,1) PRIMARY KEY NOT NULL,
    nomeUser varchar (60) unique NOT NULL,
    emailUser varchar (60) NOT NULL,
    senhaUser varchar (60) NOT NULL,
    nivelUser int NOT NULL, 
);


CREATE TABLE categoria (
    idCategoria int identity (1,1) PRIMARY KEY NOT NULL,
    nomeCategoria varchar (20) unique NOT NULL,
);




CREATE TABLE postagem (
    idPost int identity (1,1) PRIMARY KEY NOT NULL,
    tituloPost varchar (200) NOT NULL,
    textPost varchar (8000),
);


