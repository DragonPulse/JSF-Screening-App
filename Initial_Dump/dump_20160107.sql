SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ness_tech_screen
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ness_tech_screen` ;
CREATE SCHEMA IF NOT EXISTS `ness_tech_screen` DEFAULT CHARACTER SET utf8 ;
USE `ness_tech_screen` ;

-- -----------------------------------------------------
-- Table `ness_tech_screen`.`user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ness_tech_screen`.`user_role` ;

CREATE TABLE IF NOT EXISTS `ness_tech_screen`.`user_role` (
  `User_Role_Id` INT(11) NOT NULL AUTO_INCREMENT,
  `User_Role_Name` VARCHAR(45) NULL DEFAULT NULL,
  `User_Role_Status` TINYINT(4) NULL DEFAULT '0',
  PRIMARY KEY (`User_Role_Id`),
  UNIQUE INDEX `idUser_Roles_UNIQUE` (`User_Role_Id` ASC),
  UNIQUE INDEX `User_Role_Name_UNIQUE` (`User_Role_Name` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ness_tech_screen`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ness_tech_screen`.`user` ;

CREATE TABLE IF NOT EXISTS `ness_tech_screen`.`user` (
  `User_Id` INT(11) NOT NULL AUTO_INCREMENT,
  `User_Name` VARCHAR(200) NULL DEFAULT NULL,
  `User_Email_Id` VARCHAR(200) NULL DEFAULT NULL,
  `User_Phone_no` VARCHAR(20) NULL DEFAULT NULL,
  `User_First_Name` VARCHAR(100) NULL DEFAULT NULL,
  `User_Last_Name` VARCHAR(100) NULL DEFAULT NULL,
  `User_Emp_Id` VARCHAR(45) NULL DEFAULT NULL,
  `User_Role_Id` INT(11) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`User_Id`),
  UNIQUE INDEX `User_Name_UNIQUE` (`User_Name` ASC),
  UNIQUE INDEX `User_Email_Id_UNIQUE` (`User_Email_Id` ASC),
  INDEX `FK_USER_ROLE_ID_idx` (`User_Role_Id` ASC),
  CONSTRAINT `FK_USER_ROLE_ID`
    FOREIGN KEY (`User_Role_Id`)
    REFERENCES `ness_tech_screen`.`user_role` (`User_Role_Id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ness_tech_screen`.`vendor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ness_tech_screen`.`vendor` ;

CREATE TABLE IF NOT EXISTS `ness_tech_screen`.`vendor` (
  `Vendor_id` INT(11) NOT NULL AUTO_INCREMENT,
  `Vendor_name` VARCHAR(200) NULL DEFAULT NULL,
  `Vendor_Contact_First_name` VARCHAR(45) NULL DEFAULT NULL,
  `Vendor_Contact_Last_Name` VARCHAR(45) NULL DEFAULT NULL,
  `Vendor_Contact_number` VARCHAR(45) NULL DEFAULT NULL,
  `Vendor_Email_id` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`Vendor_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ness_tech_screen`.`candidate`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ness_tech_screen`.`candidate` ;

CREATE TABLE IF NOT EXISTS `ness_tech_screen`.`candidate` (
  `Candidate_Id` INT(11) NOT NULL AUTO_INCREMENT,
  `Candidate_First_Name` VARCHAR(100) NULL DEFAULT NULL,
  `Candidate_Last_Name` VARCHAR(100) NULL DEFAULT NULL,
  `Candidate_Middle_Name` VARCHAR(100) NULL DEFAULT NULL,
  `Candidate_Phone_Number` VARCHAR(100) NULL DEFAULT NULL,
  `Candidate_handeled_By` INT(11) NULL DEFAULT NULL,
  `Candidate_Vendor` INT(11) NULL DEFAULT NULL,
  `candidate_Email` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`Candidate_Id`),
  UNIQUE INDEX `Candidate_Id_UNIQUE` (`Candidate_Id` ASC),
  INDEX `Candidate_Handled_By_User_idx` (`Candidate_handeled_By` ASC),
  INDEX `FK_CANDIDATE_VENDOR_ID_idx` (`Candidate_Vendor` ASC),
  CONSTRAINT `Candidate_Handled_By_User`
    FOREIGN KEY (`Candidate_handeled_By`)
    REFERENCES `ness_tech_screen`.`user` (`User_Id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL,
  CONSTRAINT `FK_CANDIDATE_VENDOR_ID`
    FOREIGN KEY (`Candidate_Vendor`)
    REFERENCES `ness_tech_screen`.`vendor` (`Vendor_id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ness_tech_screen`.`candidate_screen_details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ness_tech_screen`.`candidate_screen_details` ;

CREATE TABLE IF NOT EXISTS `ness_tech_screen`.`candidate_screen_details` (
  `Candidate_Screen_details_Id` INT(11) NOT NULL AUTO_INCREMENT,
  `Candidate_Screened_By` INT(11) NULL DEFAULT NULL,
  `Candidate_Screened_Date` DATE NULL DEFAULT NULL,
  `Candidate_Screened_Type` VARCHAR(20) NULL DEFAULT NULL,
  `Candidate_Screened_Comments` LONGTEXT NULL DEFAULT NULL,
  `candidate_ID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Candidate_Screen_details_Id`),
  UNIQUE INDEX `Candidate_Screen_details_Id_UNIQUE` (`Candidate_Screen_details_Id` ASC),
  INDEX `FK_CANDIDATE_SCREEN_CANDIDATE_ID_idx` (`candidate_ID` ASC),
  INDEX `FK_CANDIDATE_SCREENED_BY_USER_idx` (`Candidate_Screened_By` ASC),
  CONSTRAINT `FK_CANDIDATE_SCREENED_BY_USER`
    FOREIGN KEY (`Candidate_Screened_By`)
    REFERENCES `ness_tech_screen`.`user` (`User_Id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL,
  CONSTRAINT `FK_CANDIDATE_SCREEN_CANDIDATE_ID`
    FOREIGN KEY (`candidate_ID`)
    REFERENCES `ness_tech_screen`.`candidate` (`Candidate_Id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ness_tech_screen`.`documents_details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ness_tech_screen`.`documents_details` ;

CREATE TABLE IF NOT EXISTS `ness_tech_screen`.`documents_details` (
  `Documents_Details_Id` INT(11) NOT NULL AUTO_INCREMENT,
  `Doc_Name` VARCHAR(45) NULL DEFAULT NULL,
  `Doc_Type` VARCHAR(45) NULL DEFAULT NULL,
  `Doc_Uploaded_By` INT(11) NULL DEFAULT NULL,
  `Doc_Upload_Date` DATE NULL DEFAULT NULL,
  `Doc_version` INT(11) NULL DEFAULT NULL,
  `Candidate_ID` INT(11) NULL DEFAULT NULL,
  `Doc_Location` LONGTEXT NULL DEFAULT NULL,
  `Doc_Desc` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`Documents_Details_Id`),
  INDEX `FK_DOC_CANDIDATE_ID_idx` (`Candidate_ID` ASC),
  INDEX `FK_DOC_UPLOADED_BY_idx` (`Doc_Uploaded_By` ASC),
  CONSTRAINT `FK_DOC_CANDIDATE_ID`
    FOREIGN KEY (`Candidate_ID`)
    REFERENCES `ness_tech_screen`.`candidate` (`Candidate_Id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL,
  CONSTRAINT `FK_DOC_UPLOADED_BY`
    FOREIGN KEY (`Doc_Uploaded_By`)
    REFERENCES `ness_tech_screen`.`user` (`User_Id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
