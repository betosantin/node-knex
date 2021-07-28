# node-knex
Projeto teste utilizando o knex


CREATE SCHEMA `knexjs`;

CREATE TABLE `knexjs`.`games` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(120) NULL,
  `preco` FLOAT NULL,
  `estudio` INT UNSIGNED NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `knexjs`.`estudio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
