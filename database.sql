-- MySQL Script generated by MySQL Workbench
-- Tue Jun 22 15:22:13 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema vemdaterra
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vemdaterra
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vemdaterra` DEFAULT CHARACTER SET utf8 ;
USE `vemdaterra` ;

-- -----------------------------------------------------
-- Table `vemdaterra`.`Categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `vemdaterra`.`Categoria` ;

CREATE TABLE IF NOT EXISTS `vemdaterra`.`Categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `subcategoria` VARCHAR(45) NOT NULL,
  `fornecedor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vemdaterra`.`Produto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `vemdaterra`.`Produto` ;

CREATE TABLE IF NOT EXISTS `vemdaterra`.`Produto` (
  `idProduto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(90) NOT NULL,
  `descricao` VARCHAR(260) NOT NULL,
  `valor` DECIMAL(5,2) NOT NULL,
  `codigo` VARCHAR(10) NOT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  PRIMARY KEY (`idProduto`, `Categoria_idCategoria`),
  INDEX `fk_Produto_Categoria1_idx` (`Categoria_idCategoria` ASC) VISIBLE,
  CONSTRAINT `fk_Produto_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `vemdaterra`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vemdaterra`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `vemdaterra`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `vemdaterra`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(90) NOT NULL,
  `senha` VARCHAR(260) NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vemdaterra`.`Venda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `vemdaterra`.`Venda` ;

CREATE TABLE IF NOT EXISTS `vemdaterra`.`Venda` (
  `Usuario_idUsuario` INT NOT NULL,
  `Produto_idProduto` INT NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`, `Produto_idProduto`),
  INDEX `fk_Usuario_has_Produto_Produto1_idx` (`Produto_idProduto` ASC) VISIBLE,
  INDEX `fk_Usuario_has_Produto_Usuario_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_has_Produto_Usuario`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `vemdaterra`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_Produto_Produto1`
    FOREIGN KEY (`Produto_idProduto`)
    REFERENCES `vemdaterra`.`Produto` (`idProduto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
