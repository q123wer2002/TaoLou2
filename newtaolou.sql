-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2015 at 05:14 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `newtaolou`
--

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_account`
--

CREATE TABLE IF NOT EXISTS `taolou2_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `taolou2_account`
--

INSERT INTO `taolou2_account` (`id`, `memberId`, `email`, `password`, `createDate`) VALUES
(1, 1, 'q123wer2002@gmail.com', 'b7d9e2e1fea3c1aa481c50a63dafde65', '2015-03-07 16:13:10');

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_company`
--

CREATE TABLE IF NOT EXISTS `taolou2_company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `detail` longblob NOT NULL,
  `image` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_company_job`
--

CREATE TABLE IF NOT EXISTS `taolou2_company_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyId` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `source` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `salary` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_company_job_skill`
--

CREATE TABLE IF NOT EXISTS `taolou2_company_job_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jobId` int(11) NOT NULL,
  `skillId` int(11) NOT NULL,
  `level` int(1) NOT NULL COMMENT '1~5, 1=>weak, 5=>strong',
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_member_detail`
--

CREATE TABLE IF NOT EXISTS `taolou2_member_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `typeId` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(10) NOT NULL,
  `salary` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jobstatus` varchar(5) COLLATE utf8_unicode_ci NOT NULL COMMENT '1=>正在找工作, 2=>觀望中, 3=>不想換工作',
  `jobNature` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '1=>全職, 2=>兼職, 3=>實習',
  `matchFrequency` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '1=>everyday, 2=>1 for a week, 3=>3 for a week',
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `taolou2_member_detail`
--

INSERT INTO `taolou2_member_detail` (`id`, `type`, `typeId`, `email`, `name`, `photo`, `phone`, `salary`, `jobstatus`, `jobNature`, `matchFrequency`, `createDate`) VALUES
(1, 'Taolou', '', 'q123wer2002@gmail.com', 'q123wer2002@gmail.com', '', 0, '70000', '1', '1', '1', '2015-03-07 16:13:09');

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_member_experience`
--

CREATE TABLE IF NOT EXISTS `taolou2_member_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT 'education, work_experience',
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'education or jobTitle',
  `start` year(4) NOT NULL,
  `end` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'school name or company name',
  `major` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'major or role',
  `detail` longtext COLLATE utf8_unicode_ci,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_member_jobname`
--

CREATE TABLE IF NOT EXISTS `taolou2_member_jobname` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL,
  `jobName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `taolou2_member_jobname`
--

INSERT INTO `taolou2_member_jobname` (`id`, `memberId`, `jobName`, `createDate`) VALUES
(1, 1, 'wqdqijj', '2015-03-07 16:13:10');

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_member_location`
--

CREATE TABLE IF NOT EXISTS `taolou2_member_location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL,
  `country` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `taolou2_member_location`
--

INSERT INTO `taolou2_member_location` (`id`, `memberId`, `country`, `createDate`) VALUES
(1, 1, '花蓮縣', '2015-03-07 16:13:10');

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_member_skill`
--

CREATE TABLE IF NOT EXISTS `taolou2_member_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL,
  `skillId` int(11) NOT NULL,
  `level` varchar(1) COLLATE utf8_unicode_ci NOT NULL COMMENT '1~5, 1=>week, 5=>strong',
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `taolou2_member_skill`
--

INSERT INTO `taolou2_member_skill` (`id`, `memberId`, `skillId`, `level`, `createDate`) VALUES
(1, 1, 37, '4', '2015-03-07 16:13:10'),
(2, 1, 28, '3', '2015-03-07 16:13:10'),
(3, 1, 49, '4', '2015-03-07 16:13:10'),
(4, 1, 52, '5', '2015-03-07 16:13:10'),
(5, 1, 53, '3', '2015-03-07 16:13:10'),
(6, 1, 38, '4', '2015-03-07 16:13:10');

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_system_skill`
--

CREATE TABLE IF NOT EXISTS `taolou2_system_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'y',
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=54 ;

--
-- Dumping data for table `taolou2_system_skill`
--

INSERT INTO `taolou2_system_skill` (`id`, `name`, `status`, `createDate`) VALUES
(1, 'Web Development', 'y', '2015-03-05 15:48:14'),
(3, 'Web Design', 'y', '2015-03-05 15:48:14'),
(5, 'Microsoft Excel', 'y', '2015-03-05 15:48:14'),
(7, 'SQL', 'y', '2015-03-05 15:48:14'),
(9, 'C++', 'y', '2015-03-05 15:48:14'),
(11, 'Java', 'y', '2015-03-05 15:48:14'),
(13, 'JavaScript', 'y', '2015-03-05 15:48:14'),
(15, 'MySQL', 'y', '2015-03-05 15:48:14'),
(17, 'ABAQUS', 'n', '2015-03-07 13:48:22'),
(18, 'FileNet', 'n', '2015-03-07 13:48:22'),
(19, 'Adobe Acrobat', 'n', '2015-03-07 13:48:22'),
(20, 'AIX', 'n', '2015-03-07 13:48:22'),
(21, 'AVL', 'n', '2015-03-07 13:48:22'),
(22, '3ds Max', 'n', '2015-03-07 15:05:47'),
(23, 'FDDI', 'n', '2015-03-07 15:05:47'),
(24, 'ActiveX', 'n', '2015-03-07 15:05:47'),
(25, 'ADC', 'n', '2015-03-07 15:05:47'),
(26, 'Cakewalk', 'n', '2015-03-07 15:05:47'),
(27, 'Attoltestware', 'n', '2015-03-07 15:13:10'),
(28, '3ds Max Design', 'n', '2015-03-07 15:13:10'),
(29, 'ACT', 'n', '2015-03-07 15:13:10'),
(30, 'Adobe Photoshop', 'n', '2015-03-07 15:13:10'),
(31, 'Access', 'n', '2015-03-07 15:13:10'),
(32, 'Chipware', 'n', '2015-03-07 15:21:08'),
(33, 'BounderChecker', 'n', '2015-03-07 15:21:08'),
(34, 'Authorware', 'n', '2015-03-07 15:31:52'),
(35, 'Lightwave', 'n', '2015-03-07 15:31:53'),
(36, 'Bay Networks', 'n', '2015-03-07 15:31:53'),
(37, 'ArcView', 'n', '2015-03-07 15:38:59'),
(38, 'ActionScript', 'n', '2015-03-07 15:38:59'),
(39, 'SuperGIS', 'n', '2015-03-07 15:40:48'),
(40, 'MQSeries', 'n', '2015-03-07 15:40:48'),
(41, 'QuickTest Professional', 'n', '2015-03-07 15:40:48'),
(42, 'Apache SOAP', 'n', '2015-03-07 15:44:37'),
(43, 'Alias', 'n', '2015-03-07 15:44:37'),
(44, 'Banyan Vines', 'n', '2015-03-07 15:44:37'),
(45, 'Asynch', 'n', '2015-03-07 15:46:30'),
(46, 'Astra QuickTest', 'n', '2015-03-07 15:46:30'),
(47, 'ANSI SQL', 'n', '2015-03-07 15:58:20'),
(48, 'After Effects', 'n', '2015-03-07 15:58:20'),
(49, 'Cold Fusion', 'n', '2015-03-07 16:00:33'),
(50, 'Avaya', 'n', '2015-03-07 16:00:33'),
(51, 'Vizact 2000', 'n', '2015-03-07 16:02:40'),
(52, 'Angular', 'n', '2015-03-07 16:13:10'),
(53, 'AdvanceLink', 'n', '2015-03-07 16:13:10');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
