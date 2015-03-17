-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2015 at 02:48 AM
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=17 ;

--
-- Dumping data for table `taolou2_account`
--

INSERT INTO `taolou2_account` (`id`, `memberId`, `email`, `password`, `createDate`) VALUES
(1, 1, 'q123wer2002@gmail.com', 'b7d9e2e1fea3c1aa481c50a63dafde65', '2015-03-07 16:13:10'),
(2, 2, 'c80617@hotmail.com', '39ee488c7696d8f3ee3456218666a3c9', '2015-03-09 07:45:30'),
(3, 3, 'q123wer2002@yahoo.com.tw', 'd41d8cd98f00b204e9800998ecf8427e', '2015-03-10 09:07:47'),
(11, 8, 'q123wer2002@yahoo.com.tw', '', '2015-03-10 13:08:34'),
(12, 9, 'chpplen@hotmail.com', '25d55ad283aa400af464c76d713c07ad', '2015-03-10 13:46:13'),
(13, 10, 'q123wer2002@123.com', 'd1528912af26697e26a7b48049450e0f', '2015-03-10 15:18:52'),
(14, 11, 'chuanghao7848@gmail.com', 'a53a5991445a2adc87ea390b238a67f0', '2015-03-12 05:50:33'),
(15, 12, 'meggie80321ya@gmail.com', '6e54acd729c951e7de73f8014f30cc0b', '2015-03-12 06:36:56'),
(16, 13, 'tina7fish@hotmail.com', '0107537929dfa411daddc4a865d140f6', '2015-03-15 13:14:05');

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_company`
--

CREATE TABLE IF NOT EXISTS `taolou2_company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `website` longtext COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `taolou2_company`
--

INSERT INTO `taolou2_company` (`id`, `name`, `website`, `image`) VALUES
(1, '合勤科技Zyxel', 'http://www.zyxel.com/tw/zh/homepage.shtml', 'http://www.itnex.ru/netcat_files/userfiles/logo/ZyXEL_logo1.jpg'),
(2, '索驥創意科技股份有限公司', 'http://www.sixnology.com/', 'http://startups.511plus.com/images/six-logo.png'),
(3, '友達光電股份有限公司(友達)', 'http://www.auo.com.tw/?sn=15&lang=zh-TW', 'http://i1-news.softpedia-static.com/images/news2/Naked-Eye-3D-Panels-for-Notebooks-and-Tablets-Developed-by-AUO-2.jpg'),
(4, '昇詮科技股份有限公司', 'http://www.1111.com.tw/%E6%98%87%E8%A9%AE%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-%E6%89%BE%E5%B7%A5%E4%BD%9C%E6%A9%9F%E6%9C%83-9450207.htm', 'http://images.1111.com.tw/oad/9450207.jpg');

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
-- Table structure for table `taolou2_jobmatch`
--

CREATE TABLE IF NOT EXISTS `taolou2_jobmatch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL,
  `companyId` int(11) NOT NULL,
  `jobName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jobURL` longtext COLLATE utf8_unicode_ci NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `emailAlert` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'n',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `taolou2_jobmatch`
--

INSERT INTO `taolou2_jobmatch` (`id`, `memberId`, `companyId`, `jobName`, `jobURL`, `createDate`, `emailAlert`) VALUES
(1, 2, 1, 'ZyXEL_網頁(GUI)研發工程師', 'http://tw.indeed.com/rc/clk?jk=d2185379e1bf4d37', '2015-03-16 06:42:58', 'y'),
(2, 1, 2, 'Mobile App Engineer', 'http://tw.indeed.com/rc/clk?jk=64aa02bc5ef310a3', '2015-03-16 07:02:41', 'y'),
(3, 11, 3, 'IT資訊工程師(新竹廠)', 'http://tw.indeed.com/rc/clk?jk=b36764d19487a4d9', '2015-03-16 08:00:56', 'y'),
(4, 12, 4, '品管人員', 'http://tw.indeed.com/rc/clk?jk=ae348ad493210afc', '2015-03-16 08:10:34', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_match`
--

CREATE TABLE IF NOT EXISTS `taolou2_match` (
  `id` int(11) NOT NULL,
  `memberId` int(11) NOT NULL,
  `sameSkillCount` int(11) NOT NULL,
  `src` int(11) NOT NULL,
  `createDate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
  `phone` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `salary` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jobstatus` varchar(5) COLLATE utf8_unicode_ci NOT NULL COMMENT '1=>正在找工作, 2=>觀望中, 3=>不想換工作',
  `jobNature` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '1=>全職, 2=>兼職, 3=>實習',
  `matchFrequency` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '1=>everyday, 2=>1 for a week, 3=>3 for a week',
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

--
-- Dumping data for table `taolou2_member_detail`
--

INSERT INTO `taolou2_member_detail` (`id`, `type`, `typeId`, `email`, `name`, `photo`, `phone`, `salary`, `jobstatus`, `jobNature`, `matchFrequency`, `createDate`) VALUES
(1, 'Taolou', '', 'q123wer2002@gmail.com', '林彥丞', '', '0911400733', '50000', '1', '1|2', '2', '2015-03-12 01:02:31'),
(2, 'Taolou', '', 'c80617@hotmail.com', 'c80617@hotmail.com', '', '', '45000', '1', '1', '1', '2015-03-10 06:52:32'),
(3, 'Taolou', '', 'q123wer2002@yahoo.com.tw', 'Danny', '', '', '50000', '', '1', '1', '2015-03-10 09:07:08'),
(8, 'LinkedIn', 'BJp7ERzmLD', 'q123wer2002@yahoo.com.tw', 'Danny Lin', 'https://media.licdn.com/mpr/mprx/0_mB1VmsXP7pPbPVqw2vhdmJXt70QkPxvwunF5m4v_KVtvuRCIGli9hZ3STl6srZNb7NAXTxFO5G-O', '', '80000', '1', '1|2', '2', '2015-03-10 13:11:47'),
(9, 'Taolou', '', 'chpplen@hotmail.com', 'chpplen@hotmail.com', '', '', '40000', '1', '1', '1', '2015-03-10 13:46:13'),
(10, 'Taolou', '', 'q123wer2002@123.com', 'Big Dad', '', '', '30000', '2', '3', '3', '2015-03-10 15:19:28'),
(11, 'Taolou', '', 'chuanghao7848@gmail.com', 'chuanghao7848@gmail.com', '', '', '45000', '1', '1', '1', '2015-03-12 05:50:33'),
(12, 'Taolou', '', 'meggie80321ya@gmail.com', 'meggie80321ya@gmail.com', '', '', '32000', '1', '1', '1', '2015-03-12 06:36:55'),
(13, 'Taolou', '', 'tina7fish@hotmail.com', 'tina7fish@hotmail.com', '', '', '40000', '1', '1', '1', '2015-03-15 13:14:05');

-- --------------------------------------------------------

--
-- Table structure for table `taolou2_member_experience`
--

CREATE TABLE IF NOT EXISTS `taolou2_member_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'education, work_experience',
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'education or jobTitle',
  `start` year(4) NOT NULL,
  `end` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'school name or company name',
  `major` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'major or role',
  `detail` longtext COLLATE utf8_unicode_ci,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=73 ;

--
-- Dumping data for table `taolou2_member_experience`
--

INSERT INTO `taolou2_member_experience` (`id`, `memberId`, `type`, `title`, `start`, `end`, `name`, `major`, `detail`, `createDate`) VALUES
(1, 2, 'education', '碩士', 2013, '2015', '交通大學', '資管所', '', '2015-03-09 07:45:31'),
(57, 8, 'education', 'Master''s Degree', 2013, '2015', 'National Chiao Tung University', 'Management Information Systems and Services', '', '2015-03-10 13:12:15'),
(58, 8, 'education', 'Bachelor''s Degree', 2009, '2012', 'National Cheng Kung University', 'Engineering/Industrial Management', '', '2015-03-10 13:12:15'),
(59, 8, 'work_experience', 'job experience', 2014, '2014', 'Dell', 'intern', 'intern', '2015-03-10 13:12:15'),
(60, 8, 'work_experience', 'job experience', 1995, '1998', 'SCT ltd co.', 'Software Engineer', 'detail', '2015-03-10 13:12:15'),
(61, 9, 'education', '碩士', 2013, '2015', '國立成功大學', '工業與資訊管理', '', '2015-03-10 13:46:13'),
(64, 11, 'education', '碩士', 2013, '2015', '交通大學', '資管所', '', '2015-03-12 05:50:34'),
(65, 12, 'education', '碩士', 2013, '2015', '國立交通大學', '工業工程與管理所', '', '2015-03-12 06:36:56'),
(66, 12, 'education', '大學', 2009, '2013', '國立勤益科技大學', '工業工程與管理學系', '', '2015-03-12 06:36:56'),
(69, 13, 'education', '碩士', 2012, '2015', '成功大學', '工業與資訊管理學系', '', '2015-03-15 13:14:05'),
(70, 13, 'education', '大學', 2008, '2012', '成功大學', '工業與資訊管理學系', '', '2015-03-15 13:14:05'),
(71, 1, 'education', '碩士', 2013, '2015', 'NCTU', 'IIM', '', '2015-03-16 06:49:35'),
(72, 1, 'education', '大學', 2009, '2013', '成功大學', '工業與資訊管理', '', '2015-03-16 06:49:35');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=46 ;

--
-- Dumping data for table `taolou2_member_jobname`
--

INSERT INTO `taolou2_member_jobname` (`id`, `memberId`, `jobName`, `createDate`) VALUES
(2, 2, '網頁設計工程師', '2015-03-09 07:45:31'),
(3, 2, '軟體工程師', '2015-03-09 07:45:31'),
(4, 2, 'MIS工程師', '2015-03-09 07:45:31'),
(6, 3, 'UI software', '2015-03-10 09:06:14'),
(25, 8, 'softeware', '2015-03-10 13:12:15'),
(26, 8, 'IOS', '2015-03-10 13:12:15'),
(27, 9, '數據分析師', '2015-03-10 13:46:14'),
(28, 10, 'Secert', '2015-03-10 15:18:52'),
(29, 10, 'Name', '2015-03-10 15:18:52'),
(30, 10, 'Market', '2015-03-10 15:18:52'),
(33, 11, 'IT人員', '2015-03-12 05:50:34'),
(34, 11, '網管', '2015-03-12 05:50:34'),
(35, 11, 'UI設計師', '2015-03-12 05:50:34'),
(36, 12, '品管(保)工程師', '2015-03-12 06:36:56'),
(37, 12, '物流管理師', '2015-03-12 06:36:56'),
(38, 12, '生產計劃管理師', '2015-03-12 06:36:56'),
(41, 13, 'IE', '2015-03-15 13:14:05'),
(42, 13, '品保', '2015-03-15 13:14:05'),
(43, 13, '採購', '2015-03-15 13:14:05'),
(44, 1, 'IOS 工程師', '2015-03-16 06:49:35'),
(45, 1, 'Android工程師', '2015-03-16 06:49:35');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=90 ;

--
-- Dumping data for table `taolou2_member_location`
--

INSERT INTO `taolou2_member_location` (`id`, `memberId`, `country`, `createDate`) VALUES
(2, 2, '新竹市', '2015-03-09 07:45:31'),
(3, 2, '台北市', '2015-03-09 07:45:31'),
(4, 2, '台南市', '2015-03-09 07:45:31'),
(5, 3, '宜蘭縣', '2015-03-10 09:06:14'),
(6, 3, '新北市', '2015-03-10 09:06:14'),
(7, 3, '桃園市', '2015-03-10 09:06:14'),
(58, 8, '台北市', '2015-03-10 13:12:15'),
(59, 8, '新竹市', '2015-03-10 13:12:15'),
(60, 8, '海外', '2015-03-10 13:12:15'),
(61, 9, '台中市', '2015-03-10 13:46:14'),
(62, 10, '新北市', '2015-03-10 15:18:52'),
(63, 10, '台北市', '2015-03-10 15:18:52'),
(64, 10, '新竹市', '2015-03-10 15:18:52'),
(71, 11, '新竹市', '2015-03-12 05:50:34'),
(72, 11, '台北市', '2015-03-12 05:50:34'),
(73, 11, '新北市', '2015-03-12 05:50:34'),
(74, 12, '新竹市', '2015-03-12 06:36:56'),
(75, 12, '台中市', '2015-03-12 06:36:56'),
(76, 12, '彰化縣', '2015-03-12 06:36:56'),
(83, 13, '台南市', '2015-03-15 13:14:05'),
(84, 13, '新竹市', '2015-03-15 13:14:05'),
(85, 13, '台北市', '2015-03-15 13:14:05'),
(86, 13, '台中市', '2015-03-15 13:14:05'),
(87, 1, '新竹市', '2015-03-16 06:49:35'),
(88, 1, '台北市', '2015-03-16 06:49:35'),
(89, 1, '桃園市', '2015-03-16 06:49:35');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=122 ;

--
-- Dumping data for table `taolou2_member_skill`
--

INSERT INTO `taolou2_member_skill` (`id`, `memberId`, `skillId`, `level`, `createDate`) VALUES
(7, 2, 11, '4', '2015-03-09 07:45:30'),
(8, 2, 54, '4', '2015-03-09 07:45:30'),
(9, 2, 15, '4', '2015-03-09 07:45:30'),
(10, 2, 55, '3', '2015-03-09 07:45:30'),
(11, 2, 56, '3', '2015-03-09 07:45:30'),
(12, 3, 37, '4', '2015-03-10 09:06:14'),
(13, 3, 28, '3', '2015-03-10 09:06:14'),
(14, 3, 49, '4', '2015-03-10 09:06:14'),
(15, 3, 52, '5', '2015-03-10 09:06:14'),
(16, 3, 53, '3', '2015-03-10 09:06:14'),
(17, 3, 38, '4', '2015-03-10 09:06:14'),
(74, 7, 13, '4', '2015-03-10 13:03:19'),
(75, 7, 15, '4', '2015-03-10 13:03:19'),
(76, 8, 1, '5', '2015-03-10 13:09:07'),
(77, 8, 3, '4', '2015-03-10 13:09:07'),
(78, 8, 5, '4', '2015-03-10 13:09:07'),
(79, 8, 7, '5', '2015-03-10 13:09:07'),
(80, 8, 9, '4', '2015-03-10 13:09:07'),
(81, 8, 11, '3', '2015-03-10 13:09:07'),
(82, 8, 13, '4', '2015-03-10 13:09:07'),
(83, 8, 15, '5', '2015-03-10 13:09:07'),
(84, 9, 9, '4', '2015-03-10 13:46:13'),
(85, 9, 58, '3', '2015-03-10 13:46:13'),
(86, 9, 59, '5', '2015-03-10 13:46:13'),
(87, 9, 60, '4', '2015-03-10 13:46:13'),
(88, 9, 61, '4', '2015-03-10 13:46:13'),
(89, 10, 38, '5', '2015-03-10 15:18:52'),
(90, 10, 31, '4', '2015-03-10 15:18:52'),
(91, 10, 24, '4', '2015-03-10 15:18:52'),
(92, 10, 37, '5', '2015-03-10 15:18:52'),
(93, 10, 48, '4', '2015-03-10 15:18:52'),
(96, 11, 11, '3', '2015-03-12 05:50:33'),
(97, 11, 5, '3', '2015-03-12 05:50:33'),
(98, 11, 15, '3', '2015-03-12 05:50:33'),
(99, 11, 62, '4', '2015-03-12 05:50:34'),
(100, 11, 54, '2', '2015-03-12 05:50:34'),
(101, 12, 63, '4', '2015-03-12 06:36:56'),
(102, 12, 64, '5', '2015-03-12 06:36:56'),
(103, 12, 65, '3', '2015-03-12 06:36:56'),
(104, 12, 66, '5', '2015-03-12 06:36:56'),
(105, 12, 67, '2', '2015-03-12 06:36:56'),
(106, 13, 68, '5', '2015-03-15 13:14:05'),
(107, 13, 69, '4', '2015-03-15 13:14:05'),
(108, 13, 70, '4', '2015-03-15 13:14:05'),
(109, 13, 71, '4', '2015-03-15 13:14:05'),
(110, 13, 72, '4', '2015-03-15 13:14:05'),
(116, 1, 52, '4', '2015-03-16 06:56:35'),
(117, 1, 11, '4', '2015-03-16 06:56:35'),
(118, 1, 73, '4', '2015-03-16 06:56:35'),
(119, 1, 56, '5', '2015-03-16 06:56:35'),
(120, 1, 74, '5', '2015-03-16 06:56:35'),
(121, 1, 13, '4', '2015-03-16 06:56:35');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=75 ;

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
(17, 'ABAQUS', 'y', '2015-03-12 00:32:56'),
(18, 'FileNet', 'y', '2015-03-12 00:32:56'),
(19, 'Adobe Acrobat', 'y', '2015-03-12 00:32:56'),
(20, 'AIX', 'y', '2015-03-12 00:32:56'),
(21, 'AVL', 'y', '2015-03-12 00:32:56'),
(22, '3ds Max', 'y', '2015-03-12 00:32:56'),
(23, 'FDDI', 'y', '2015-03-12 00:32:56'),
(24, 'ActiveX', 'y', '2015-03-12 00:32:56'),
(25, 'ADC', 'y', '2015-03-12 00:32:56'),
(26, 'Cakewalk', 'y', '2015-03-12 00:32:56'),
(27, 'Attoltestware', 'y', '2015-03-12 00:32:56'),
(28, '3ds Max Design', 'y', '2015-03-12 00:32:56'),
(29, 'ACT', 'y', '2015-03-12 00:32:56'),
(30, 'Adobe Photoshop', 'y', '2015-03-12 00:32:56'),
(31, 'Access', 'y', '2015-03-12 00:32:56'),
(32, 'Chipware', 'y', '2015-03-12 00:32:56'),
(33, 'BounderChecker', 'y', '2015-03-12 00:32:56'),
(34, 'Authorware', 'y', '2015-03-12 00:32:56'),
(35, 'Lightwave', 'y', '2015-03-12 00:32:56'),
(36, 'Bay Networks', 'y', '2015-03-12 00:32:56'),
(37, 'ArcView', 'y', '2015-03-12 00:32:56'),
(38, 'ActionScript', 'y', '2015-03-12 00:32:56'),
(39, 'SuperGIS', 'y', '2015-03-12 00:32:56'),
(40, 'MQSeries', 'y', '2015-03-12 00:32:56'),
(41, 'QuickTest Professional', 'y', '2015-03-12 00:32:56'),
(42, 'Apache SOAP', 'y', '2015-03-12 00:32:56'),
(43, 'Alias', 'y', '2015-03-12 00:32:56'),
(44, 'Banyan Vines', 'y', '2015-03-12 00:32:56'),
(45, 'Asynch', 'y', '2015-03-12 00:32:56'),
(46, 'Astra QuickTest', 'y', '2015-03-12 00:32:56'),
(47, 'ANSI SQL', 'y', '2015-03-12 00:32:56'),
(48, 'After Effects', 'y', '2015-03-12 00:32:56'),
(49, 'Cold Fusion', 'y', '2015-03-12 00:32:56'),
(50, 'Avaya', 'y', '2015-03-12 00:32:56'),
(51, 'Vizact 2000', 'y', '2015-03-12 00:32:56'),
(52, 'Angular', 'y', '2015-03-12 00:32:56'),
(53, 'AdvanceLink', 'y', '2015-03-12 00:32:56'),
(54, 'PHP', 'y', '2015-03-12 00:32:56'),
(55, '英文', 'y', '2015-03-12 00:32:56'),
(56, 'CSS', 'y', '2015-03-12 00:32:56'),
(57, 'Firewall', 'y', '2015-03-12 00:32:56'),
(58, 'RoR', 'y', '2015-03-12 00:32:56'),
(59, 'optimization', 'y', '2015-03-12 00:32:56'),
(60, 'statistic analysis', 'y', '2015-03-12 00:32:56'),
(61, 'machine learning', 'y', '2015-03-12 00:32:56'),
(62, 'ASP.NET', 'y', '2015-03-12 09:36:18'),
(63, 'Matlab', 'y', '2015-03-12 09:36:18'),
(64, 'Word', 'y', '2015-03-12 09:36:18'),
(65, 'Excel', 'y', '2015-03-12 09:36:18'),
(66, 'PowerPoint', 'y', '2015-03-12 09:36:18'),
(67, 'SPSS', 'y', '2015-03-12 09:36:18'),
(68, '邏輯能力', 'y', '2015-03-16 15:25:59'),
(69, '程式撰寫', 'y', '2015-03-16 15:26:02'),
(70, '產能規畫', 'y', '2015-03-16 15:26:05'),
(71, '語文能力', 'y', '2015-03-16 15:26:09'),
(72, '溝通能力', 'y', '2015-03-16 15:26:07'),
(73, 'AJAX', 'y', '2015-03-16 15:26:11'),
(74, 'HTML', 'y', '2015-03-16 15:26:14');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
