-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: ness_tech_screen
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appcode`
--

DROP TABLE IF EXISTS `appcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appcode` (
  `AppCode_id` int(11) NOT NULL AUTO_INCREMENT,
  `Category` varchar(100) DEFAULT NULL,
  `short_Code` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Description` varchar(225) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `created_dt` date DEFAULT NULL,
  `updated_dt` date DEFAULT NULL,
  `created_By_id` int(11) DEFAULT NULL,
  `updated_by_Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`AppCode_id`),
  UNIQUE KEY `idAppCode_UNIQUE` (`AppCode_id`),
  KEY `FK_CREATED_BY_APPCODE_idx` (`created_By_id`),
  KEY `FK_UPDATED_BY_APPCODE_idx` (`updated_by_Id`),
  CONSTRAINT `FK_CREATED_BY_APPCODE` FOREIGN KEY (`created_By_id`) REFERENCES `user` (`User_Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_UPDATED_BY_APPCODE` FOREIGN KEY (`updated_by_Id`) REFERENCES `user` (`User_Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appcode`
--

LOCK TABLES `appcode` WRITE;
/*!40000 ALTER TABLE `appcode` DISABLE KEYS */;
INSERT INTO `appcode` VALUES (5,'DOC_TYPE','dede','Resume',NULL,1,NULL,NULL,NULL,NULL),(6,'EMPLT_TYPE','C2C','Corp-To-Corp','Corp to corp',1,NULL,NULL,NULL,NULL),(7,'EMPLT_TYPE','W2','W2','w2',1,NULL,NULL,NULL,NULL),(8,'EMPLT_TYPE','FTE','Full Time','Full time',1,NULL,NULL,NULL,NULL),(9,'JOIN_TIME','1WK','One Week','One Week',1,NULL,NULL,NULL,NULL),(10,'JOIN_TIME','2WK','Two Week','two Weeke',1,NULL,NULL,NULL,NULL),(11,'JOIN_TIME','3WK','Three Weeks','three weeks',1,NULL,NULL,NULL,NULL),(12,'JOIN_TIME','IMT','Immediate','Immediate',1,NULL,NULL,NULL,NULL),(13,'PRIMARY_SKILL','JAV','Java','Java',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `appcode` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-18 15:07:03
