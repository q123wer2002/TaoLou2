-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2015 at 06:29 PM
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
(1, 2, 'q123wer2002@yahoo.com.tw', '', '2015-03-05 16:01:20');

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
  `jobType` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '1=>full, 2=>part-time, 3=>intern',
  `matchFrequency` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '1=>everyday, 2=>1 for a week, 3=>3 for a week',
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `taolou2_member_detail`
--

INSERT INTO `taolou2_member_detail` (`id`, `type`, `typeId`, `email`, `name`, `photo`, `phone`, `salary`, `jobType`, `matchFrequency`, `createDate`) VALUES
(2, 'LinkedIn', 'BJp7ERzmLD', 'q123wer2002@yahoo.com.tw', 'Danny Lin', 'https://media.licdn.com/mpr/mprx/0_mB1VmsXP7pPbPVqw2vhdmJXt70QkPxvwunF5m4v_KVtvuRCIGli9hZ3STl6srZNb7NAXTxFO5G-O', 0, '', '', '', '2015-03-05 16:01:20');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- Dumping data for table `taolou2_member_experience`
--

INSERT INTO `taolou2_member_experience` (`id`, `memberId`, `type`, `title`, `start`, `end`, `name`, `major`, `detail`, `createDate`) VALUES
(8, 2, 'education', 'Master''s Degree', 2013, '2015', 'National Chiao Tung University', 'Management Information Systems and Services', 'detail', '2015-03-05 16:01:20'),
(9, 2, 'education', 'Bachelor''s Degree', 2009, '2012', 'National Cheng Kung University', 'Engineering/Industrial Management', '', '2015-03-05 16:01:20'),
(10, 2, 'job', 'job experience', 2015, '2015', 'Intellectual Ventures', 'Software Engineer', 'cool man', '2015-03-05 16:56:54'),
(11, 2, 'job', 'job experience', 2014, '', 'Dell', 'intern', 'intern', '2015-03-05 16:55:05'),
(12, 2, 'job', 'job experience', 1995, '一年以上', 'SCT ltd co.', 'Software Engineer', 'detail', '2015-03-05 16:55:15');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_member_location`
--

CREATE TABLE IF NOT EXISTS `taolou2_member_location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL,
  `country` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `createDate` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `taolou2_member_skill`
--

INSERT INTO `taolou2_member_skill` (`id`, `memberId`, `skillId`, `level`, `createDate`) VALUES
(1, 2, 1, '5', '2015-03-05 16:37:51'),
(2, 2, 3, '2', '2015-03-05 16:37:54'),
(3, 2, 5, '5', '2015-03-05 16:37:53'),
(4, 2, 7, '4', '2015-03-05 16:37:52'),
(5, 2, 9, '3', '2015-03-05 16:37:55'),
(6, 2, 11, '5', '2015-03-05 16:37:56'),
(7, 2, 13, '5', '2015-03-05 16:38:00'),
(8, 2, 15, '3', '2015-03-05 16:37:59');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=17 ;

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
(15, 'MySQL', 'y', '2015-03-05 15:48:14');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
