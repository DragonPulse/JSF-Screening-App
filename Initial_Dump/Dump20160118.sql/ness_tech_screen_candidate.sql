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
-- Table structure for table `candidate`
--

DROP TABLE IF EXISTS `candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `candidate` (
  `Candidate_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Candidate_First_Name` varchar(100) DEFAULT NULL,
  `Candidate_Last_Name` varchar(100) DEFAULT NULL,
  `Candidate_Middle_Name` varchar(100) DEFAULT NULL,
  `Candidate_Phone_Number` varchar(100) DEFAULT NULL,
  `Candidate_handeled_By` int(11) DEFAULT NULL,
  `Candidate_Vendor_id` int(11) DEFAULT NULL,
  `candidate_Email` varchar(100) DEFAULT NULL,
  `updated_by_Id` int(11) DEFAULT NULL,
  `created_By_id` int(11) DEFAULT NULL,
  `created_dt` date DEFAULT NULL,
  `updated_dt` date DEFAULT NULL,
  PRIMARY KEY (`Candidate_Id`),
  UNIQUE KEY `Candidate_Id_UNIQUE` (`Candidate_Id`),
  KEY `Candidate_Handled_By_User_idx` (`Candidate_handeled_By`),
  KEY `FK_CANDIDATE_VENDOR_ID_idx` (`Candidate_Vendor_id`),
  CONSTRAINT `Candidate_Handled_By_User` FOREIGN KEY (`Candidate_handeled_By`) REFERENCES `user` (`User_Id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `FK_CANDIDATE_VENDOR_ID` FOREIGN KEY (`Candidate_Vendor_id`) REFERENCES `vendor` (`Vendor_id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidate`
--

LOCK TABLES `candidate` WRITE;
/*!40000 ALTER TABLE `candidate` DISABLE KEYS */;
INSERT INTO `candidate` VALUES (18,'asdsad','sadsad',NULL,'(546) 464-6546',6,3,'dede@dede.com',NULL,NULL,NULL,NULL),(20,'sanjay','sanjay',NULL,'(787) 879-8787',6,4,'ppp@pp.com',6,NULL,NULL,'2016-01-17'),(21,'dede','dede',NULL,'(445) 444-5454',6,3,'qw@ee.com',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `candidate` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-18 15:07:02
