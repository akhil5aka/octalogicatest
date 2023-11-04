-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 04, 2023 at 12:21 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_oct`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_details`
--

CREATE TABLE IF NOT EXISTS `tb_user_details` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `model_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `model_id` (`model_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tb_user_details`
--

INSERT INTO `tb_user_details` (`user_id`, `first_name`, `last_name`, `model_id`, `start_date`, `end_date`) VALUES
(1, 'AKhil', 'Kumar', 1, '2023-06-03', '2023-06-10'),
(2, 'Arun', 'Kumar', 1, '2023-06-03', '2023-06-10');

-- --------------------------------------------------------

--
-- Table structure for table `tb_vehicles`
--

CREATE TABLE IF NOT EXISTS `tb_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicles` varchar(200) NOT NULL,
  `wheel_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wheel_id` (`wheel_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tb_vehicles`
--

INSERT INTO `tb_vehicles` (`id`, `vehicles`, `wheel_id`) VALUES
(1, 'SUV', 1),
(2, 'SEDAN', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_vehicle_models`
--

CREATE TABLE IF NOT EXISTS `tb_vehicle_models` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(200) NOT NULL,
  `vehicle_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vehicle_id` (`vehicle_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tb_vehicle_models`
--

INSERT INTO `tb_vehicle_models` (`id`, `model`, `vehicle_id`) VALUES
(1, 'scorpio', 1),
(2, 'city', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_vehicle_wheel_category`
--

CREATE TABLE IF NOT EXISTS `tb_vehicle_wheel_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no_of_wheels` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tb_vehicle_wheel_category`
--

INSERT INTO `tb_vehicle_wheel_category` (`id`, `no_of_wheels`) VALUES
(1, 2),
(2, 4);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_user_details`
--
ALTER TABLE `tb_user_details`
  ADD CONSTRAINT `tb_user_details_ibfk_1` FOREIGN KEY (`model_id`) REFERENCES `tb_vehicle_models` (`id`);

--
-- Constraints for table `tb_vehicles`
--
ALTER TABLE `tb_vehicles`
  ADD CONSTRAINT `tb_vehicles_ibfk_1` FOREIGN KEY (`wheel_id`) REFERENCES `tb_vehicle_wheel_category` (`id`);

--
-- Constraints for table `tb_vehicle_models`
--
ALTER TABLE `tb_vehicle_models`
  ADD CONSTRAINT `tb_vehicle_models_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `tb_vehicles` (`id`);
