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
-- Table structure for table `documents_details`
--

DROP TABLE IF EXISTS `documents_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documents_details` (
  `Documents_Details_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Doc_Name` varchar(255) DEFAULT NULL,
  `Doc_Type` varchar(45) DEFAULT NULL,
  `Doc_Uploaded_By` int(11) DEFAULT NULL,
  `Doc_Upload_Date` date DEFAULT NULL,
  `Doc_version` int(11) DEFAULT NULL,
  `Candidate_ID` int(11) DEFAULT NULL,
  `Doc_Location` longtext,
  `Doc_Desc` longtext,
  PRIMARY KEY (`Documents_Details_Id`),
  KEY `FK_DOC_CANDIDATE_ID_idx` (`Candidate_ID`),
  KEY `FK_DOC_UPLOADED_BY_idx` (`Doc_Uploaded_By`),
  CONSTRAINT `FK_DOC_CANDIDATE_ID` FOREIGN KEY (`Candidate_ID`) REFERENCES `candidate` (`Candidate_Id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `FK_DOC_UPLOADED_BY` FOREIGN KEY (`Doc_Uploaded_By`) REFERENCES `user` (`User_Id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents_details`
--

LOCK TABLES `documents_details` WRITE;
/*!40000 ALTER TABLE `documents_details` DISABLE KEYS */;
INSERT INTO `documents_details` VALUES (9,'screen.docx','Resume',6,'2016-01-17',NULL,18,'D:\\Repositories\\DOCS\\dede@dede.com\\','dede'),(12,'screen.docx','Resume',6,'2016-01-17',NULL,20,'D:\\Repositories\\DOCS\\ppp@pp.com\\','dqwe'),(13,'VijayKumar_Resume.doc','Resume',6,'2016-01-17',NULL,21,'D:\\Repositories\\DOCS\\qw@ee.com\\','dede'),(15,'VijayKumar_Resume.doc','Resume',6,'2016-01-17',NULL,NULL,'D:\\Repositories\\DOCS\\ppp@pp.com\\','uhuhu');
/*!40000 ALTER TABLE `documents_details` ENABLE KEYS */;
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
