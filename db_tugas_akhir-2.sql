-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 24, 2025 at 09:29 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_tugas_akhir`
--

-- --------------------------------------------------------

--
-- Table structure for table `ModalBiosolars`
--

CREATE TABLE `ModalBiosolars` (
  `id` int(11) NOT NULL,
  `id_modal` int(11) DEFAULT NULL,
  `hargaBiosolar` int(11) DEFAULT NULL,
  `deliveryOrderBiosolar` int(11) DEFAULT NULL,
  `keuntunganBiosolar` int(11) DEFAULT NULL,
  `hasilPerhitunganBiosolar` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ModalBiosolars`
--

INSERT INTO `ModalBiosolars` (`id`, `id_modal`, `hargaBiosolar`, `deliveryOrderBiosolar`, `keuntunganBiosolar`, `hasilPerhitunganBiosolar`, `createdAt`, `updatedAt`) VALUES
(4, 4, 7000, 1000, 950, 6300000, '2025-01-02 22:09:55', '2025-01-02 22:09:55');

-- --------------------------------------------------------

--
-- Table structure for table `ModalDexlites`
--

CREATE TABLE `ModalDexlites` (
  `id` int(11) NOT NULL,
  `id_modal` int(11) DEFAULT NULL,
  `hargaDexlite` int(11) DEFAULT NULL,
  `deliveryOrderDexlite` int(11) DEFAULT NULL,
  `keuntunganDexlite` int(11) DEFAULT NULL,
  `hasilPerhitunganDexlite` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ModalDexlites`
--

INSERT INTO `ModalDexlites` (`id`, `id_modal`, `hargaDexlite`, `deliveryOrderDexlite`, `keuntunganDexlite`, `hasilPerhitunganDexlite`, `createdAt`, `updatedAt`) VALUES
(4, 4, 7000, 1000, 950, 6300000, '2025-01-02 22:09:55', '2025-01-02 22:09:55');

-- --------------------------------------------------------

--
-- Table structure for table `ModalPertalites`
--

CREATE TABLE `ModalPertalites` (
  `id` int(11) NOT NULL,
  `id_modal` int(11) DEFAULT NULL,
  `hargaPertalite` int(11) DEFAULT NULL,
  `deliveryOrderPertalite` int(11) DEFAULT NULL,
  `keuntunganPertalite` int(11) DEFAULT NULL,
  `hasilPerhitunganPertalite` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ModalPertalites`
--

INSERT INTO `ModalPertalites` (`id`, `id_modal`, `hargaPertalite`, `deliveryOrderPertalite`, `keuntunganPertalite`, `hasilPerhitunganPertalite`, `createdAt`, `updatedAt`) VALUES
(4, 4, 7000, 1000, 950, 6300000, '2025-01-02 22:09:55', '2025-01-02 22:09:55');

-- --------------------------------------------------------

--
-- Table structure for table `ModalPertamaxes`
--

CREATE TABLE `ModalPertamaxes` (
  `id` int(11) NOT NULL,
  `id_modal` int(11) DEFAULT NULL,
  `hargaPertamax` int(11) DEFAULT NULL,
  `delevieryOrderPertamax` int(11) DEFAULT NULL,
  `keuntunganPertamax` int(11) DEFAULT NULL,
  `hasilPerhitunganPertamax` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ModalPertamaxes`
--

INSERT INTO `ModalPertamaxes` (`id`, `id_modal`, `hargaPertamax`, `delevieryOrderPertamax`, `keuntunganPertamax`, `hasilPerhitunganPertamax`, `createdAt`, `updatedAt`) VALUES
(4, 4, 7000, NULL, 950, 6300000, '2025-01-02 22:09:55', '2025-01-02 22:09:55');

-- --------------------------------------------------------

--
-- Table structure for table `Modals`
--

CREATE TABLE `Modals` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `namaFile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Modals`
--

INSERT INTO `Modals` (`id`, `id_user`, `namaFile`, `createdAt`, `updatedAt`) VALUES
(4, 14, 'Modal 3 januari 2025', '2025-01-02 22:09:55', '2025-01-02 22:09:55');

-- --------------------------------------------------------

--
-- Table structure for table `ModalTurbos`
--

CREATE TABLE `ModalTurbos` (
  `id` int(11) NOT NULL,
  `id_modal` int(11) DEFAULT NULL,
  `hargaTurbo` int(11) DEFAULT NULL,
  `deliveryOrderTurbo` int(11) DEFAULT NULL,
  `keuntunganTurbo` int(11) DEFAULT NULL,
  `hasilPerhitunganTurbo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ModalTurbos`
--

INSERT INTO `ModalTurbos` (`id`, `id_modal`, `hargaTurbo`, `deliveryOrderTurbo`, `keuntunganTurbo`, `hasilPerhitunganTurbo`, `createdAt`, `updatedAt`) VALUES
(4, 4, 7000, 1000, 950, 6300000, '2025-01-02 22:09:55', '2025-01-02 22:09:55');

-- --------------------------------------------------------

--
-- Table structure for table `PenghasilanBiosolars`
--

CREATE TABLE `PenghasilanBiosolars` (
  `id` int(11) NOT NULL,
  `id_penghasilan` int(11) DEFAULT NULL,
  `hargaJualBiosolar` int(11) DEFAULT NULL,
  `takaranAwalBiosolar` int(11) DEFAULT NULL,
  `takaranAkhir1Biosolar` int(11) DEFAULT NULL,
  `takaranAkhir2Biosolar` int(11) DEFAULT NULL,
  `sisaBiosolar` int(11) DEFAULT NULL,
  `hasilBiosolar` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PenghasilanBiosolars`
--

INSERT INTO `PenghasilanBiosolars` (`id`, `id_penghasilan`, `hargaJualBiosolar`, `takaranAwalBiosolar`, `takaranAkhir1Biosolar`, `takaranAkhir2Biosolar`, `sisaBiosolar`, `hasilBiosolar`, `createdAt`, `updatedAt`) VALUES
(6, 6, 7000, 1000, 950, 900, 100, 6300000, '2024-12-28 08:14:39', '2024-12-28 08:14:39'),
(7, 7, 7000, 1000, 950, 900, 100, 6300000, '2025-01-02 22:07:13', '2025-01-02 22:07:13');

-- --------------------------------------------------------

--
-- Table structure for table `PenghasilanDexlites`
--

CREATE TABLE `PenghasilanDexlites` (
  `id` int(11) NOT NULL,
  `id_penghasilan` int(11) DEFAULT NULL,
  `hargaJualDexlite` int(11) DEFAULT NULL,
  `takaranAwalDexlite` int(11) DEFAULT NULL,
  `takaranAkhirDexlite` int(11) DEFAULT NULL,
  `sisaDexlite` int(11) DEFAULT NULL,
  `hasilDexlite` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PenghasilanDexlites`
--

INSERT INTO `PenghasilanDexlites` (`id`, `id_penghasilan`, `hargaJualDexlite`, `takaranAwalDexlite`, `takaranAkhirDexlite`, `sisaDexlite`, `hasilDexlite`, `createdAt`, `updatedAt`) VALUES
(6, 6, 10000, 500, 450, 50, 4500000, '2024-12-28 08:14:39', '2024-12-28 08:14:39'),
(7, 7, 10000, 500, 450, 50, 4500000, '2025-01-02 22:07:13', '2025-01-02 22:07:13');

-- --------------------------------------------------------

--
-- Table structure for table `PenghasilanPertalites`
--

CREATE TABLE `PenghasilanPertalites` (
  `id` int(11) NOT NULL,
  `id_penghasilan` int(11) DEFAULT NULL,
  `hargaJualPertalite` int(11) DEFAULT NULL,
  `takaranAwalPertalite` int(11) DEFAULT NULL,
  `takaranAkhir1Pertalite` int(11) DEFAULT NULL,
  `takaranAkhir2Pertalite` int(11) DEFAULT NULL,
  `takaranAkhir3Pertalite` int(11) DEFAULT NULL,
  `takaranAkhir4Pertalite` int(11) DEFAULT NULL,
  `takaranAkhir5Pertalite` int(11) DEFAULT NULL,
  `takaranAkhir6Pertalite` int(11) DEFAULT NULL,
  `takaranAkhir7Pertalite` int(11) DEFAULT NULL,
  `sisaPertalite` int(11) DEFAULT NULL,
  `hasilPertalite` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PenghasilanPertalites`
--

INSERT INTO `PenghasilanPertalites` (`id`, `id_penghasilan`, `hargaJualPertalite`, `takaranAwalPertalite`, `takaranAkhir1Pertalite`, `takaranAkhir2Pertalite`, `takaranAkhir3Pertalite`, `takaranAkhir4Pertalite`, `takaranAkhir5Pertalite`, `takaranAkhir6Pertalite`, `takaranAkhir7Pertalite`, `sisaPertalite`, `hasilPertalite`, `createdAt`, `updatedAt`) VALUES
(6, 6, 8500, 1000, 980, 970, 960, 950, 940, 930, 920, 80, 6800000, '2024-12-28 08:14:39', '2024-12-28 08:14:39'),
(7, 7, 8500, 1000, 980, 970, 960, 950, 940, 930, 920, 80, 6800000, '2025-01-02 22:07:13', '2025-01-02 22:07:13');

-- --------------------------------------------------------

--
-- Table structure for table `PenghasilanPertamaxes`
--

CREATE TABLE `PenghasilanPertamaxes` (
  `id` int(11) NOT NULL,
  `id_penghasilan` int(11) DEFAULT NULL,
  `hargaJualPertamax` int(11) DEFAULT NULL,
  `takaranAwalPertamax` int(11) DEFAULT NULL,
  `takaranAkhir1Pertamax` int(11) DEFAULT NULL,
  `takaranAkhir2Pertamax` int(11) DEFAULT NULL,
  `takaranAkhir3Pertamax` int(11) DEFAULT NULL,
  `takaranAkhir4Pertamax` int(11) DEFAULT NULL,
  `takaranAkhir5Pertamax` int(11) DEFAULT NULL,
  `sisaPertamax` int(11) DEFAULT NULL,
  `hasilPertamax` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PenghasilanPertamaxes`
--

INSERT INTO `PenghasilanPertamaxes` (`id`, `id_penghasilan`, `hargaJualPertamax`, `takaranAwalPertamax`, `takaranAkhir1Pertamax`, `takaranAkhir2Pertamax`, `takaranAkhir3Pertamax`, `takaranAkhir4Pertamax`, `takaranAkhir5Pertamax`, `sisaPertamax`, `hasilPertamax`, `createdAt`, `updatedAt`) VALUES
(6, 6, 12000, 800, 750, 700, 650, 600, 550, 50, 9600000, '2024-12-28 08:14:39', '2024-12-28 08:14:39'),
(7, 7, 12000, 800, 750, 700, 650, 600, 550, 50, 9600000, '2025-01-02 22:07:13', '2025-01-02 22:07:13');

-- --------------------------------------------------------

--
-- Table structure for table `Penghasilans`
--

CREATE TABLE `Penghasilans` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `namaPengeluaran` varchar(255) DEFAULT NULL,
  `nominalPengeluaran` int(11) DEFAULT NULL,
  `hasilTotal` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `namaFile` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Penghasilans`
--

INSERT INTO `Penghasilans` (`id`, `id_user`, `namaPengeluaran`, `nominalPengeluaran`, `hasilTotal`, `createdAt`, `updatedAt`, `namaFile`) VALUES
(6, 14, 'service damkar', 10000000, 100000, '2024-12-28 08:14:39', '2024-12-28 08:14:39', 'test'),
(7, 14, 'perbaikan 1', 10000000, 100000, '2025-01-02 22:07:13', '2025-01-02 22:07:13', 'penghailan 3 januari 2025');

-- --------------------------------------------------------

--
-- Table structure for table `PenghasilanTurbos`
--

CREATE TABLE `PenghasilanTurbos` (
  `id` int(11) NOT NULL,
  `id_penghasilan` int(11) DEFAULT NULL,
  `hargaJualTurbo` int(11) DEFAULT NULL,
  `takaranAwalTurbo` int(11) DEFAULT NULL,
  `sisaTurbo` int(11) DEFAULT NULL,
  `hasilTurbo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PenghasilanTurbos`
--

INSERT INTO `PenghasilanTurbos` (`id`, `id_penghasilan`, `hargaJualTurbo`, `takaranAwalTurbo`, `sisaTurbo`, `hasilTurbo`, `createdAt`, `updatedAt`) VALUES
(6, 6, 15000, 400, 50, 5250000, '2024-12-28 08:14:39', '2024-12-28 08:14:39'),
(7, 7, 15000, 400, 50, 5250000, '2025-01-02 22:07:13', '2025-01-02 22:07:13');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20241225192117-create-penghasilan.js'),
('20241225192509-create-penghasilan-turbo.js'),
('20241225192625-create-penghasilan-pertalite.js'),
('20241225192752-create-penghasilan-pertamax.js'),
('20241225192834-create-penghasilan-dexlite.js'),
('20241225192851-create-penghasilan-biosolar.js'),
('20241225193136-create-user.js'),
('20241226132925-rename-akaranAkhir2Biosolar-to-takaranAkhir2Biosolar.js'),
('20241226133431-add-foreign-key-to-penghasilan.js'),
('20241226140641-add-foreign-key-relations.js'),
('20241227170231-create-modal.js'),
('20241227170241-create-modal-pertalite.js'),
('20241227170250-create-modal-pertamax.js'),
('20241227170301-create-modal-biosolar.js'),
('20241227170308-create-modal-turbo.js'),
('20241227170314-create-modal-dexlite.js'),
('20241227172127-rename-id_user-to-id_modal.js');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `userName`, `password`, `createdAt`, `updatedAt`) VALUES
(14, 'ijat', 'admincoy', '$2b$10$OgZSoHCbi8f1B0MvzaaDqeJ/8JWPcPU8KBjKi/9BUWcBYZ5SIHBsO', '2024-12-28 08:12:44', '2024-12-28 08:12:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ModalBiosolars`
--
ALTER TABLE `ModalBiosolars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_modal` (`id_modal`);

--
-- Indexes for table `ModalDexlites`
--
ALTER TABLE `ModalDexlites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_modal` (`id_modal`);

--
-- Indexes for table `ModalPertalites`
--
ALTER TABLE `ModalPertalites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_modal` (`id_modal`);

--
-- Indexes for table `ModalPertamaxes`
--
ALTER TABLE `ModalPertamaxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_modal` (`id_modal`);

--
-- Indexes for table `Modals`
--
ALTER TABLE `Modals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `ModalTurbos`
--
ALTER TABLE `ModalTurbos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_modal` (`id_modal`);

--
-- Indexes for table `PenghasilanBiosolars`
--
ALTER TABLE `PenghasilanBiosolars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_penghasilan` (`id_penghasilan`);

--
-- Indexes for table `PenghasilanDexlites`
--
ALTER TABLE `PenghasilanDexlites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_penghasilan` (`id_penghasilan`);

--
-- Indexes for table `PenghasilanPertalites`
--
ALTER TABLE `PenghasilanPertalites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_penghasilan` (`id_penghasilan`);

--
-- Indexes for table `PenghasilanPertamaxes`
--
ALTER TABLE `PenghasilanPertamaxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_penghasilan` (`id_penghasilan`);

--
-- Indexes for table `Penghasilans`
--
ALTER TABLE `Penghasilans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `PenghasilanTurbos`
--
ALTER TABLE `PenghasilanTurbos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_penghasilan` (`id_penghasilan`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ModalBiosolars`
--
ALTER TABLE `ModalBiosolars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ModalDexlites`
--
ALTER TABLE `ModalDexlites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ModalPertalites`
--
ALTER TABLE `ModalPertalites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ModalPertamaxes`
--
ALTER TABLE `ModalPertamaxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Modals`
--
ALTER TABLE `Modals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ModalTurbos`
--
ALTER TABLE `ModalTurbos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `PenghasilanBiosolars`
--
ALTER TABLE `PenghasilanBiosolars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `PenghasilanDexlites`
--
ALTER TABLE `PenghasilanDexlites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `PenghasilanPertalites`
--
ALTER TABLE `PenghasilanPertalites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `PenghasilanPertamaxes`
--
ALTER TABLE `PenghasilanPertamaxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Penghasilans`
--
ALTER TABLE `Penghasilans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `PenghasilanTurbos`
--
ALTER TABLE `PenghasilanTurbos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ModalBiosolars`
--
ALTER TABLE `ModalBiosolars`
  ADD CONSTRAINT `modalbiosolars_ibfk_1` FOREIGN KEY (`id_modal`) REFERENCES `Modals` (`id`);

--
-- Constraints for table `ModalDexlites`
--
ALTER TABLE `ModalDexlites`
  ADD CONSTRAINT `modaldexlites_ibfk_1` FOREIGN KEY (`id_modal`) REFERENCES `Modals` (`id`);

--
-- Constraints for table `ModalPertalites`
--
ALTER TABLE `ModalPertalites`
  ADD CONSTRAINT `modalpertalites_ibfk_1` FOREIGN KEY (`id_modal`) REFERENCES `Modals` (`id`);

--
-- Constraints for table `ModalPertamaxes`
--
ALTER TABLE `ModalPertamaxes`
  ADD CONSTRAINT `modalpertamaxes_ibfk_1` FOREIGN KEY (`id_modal`) REFERENCES `Modals` (`id`);

--
-- Constraints for table `Modals`
--
ALTER TABLE `Modals`
  ADD CONSTRAINT `modals_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id`);

--
-- Constraints for table `ModalTurbos`
--
ALTER TABLE `ModalTurbos`
  ADD CONSTRAINT `modalturbos_ibfk_1` FOREIGN KEY (`id_modal`) REFERENCES `Modals` (`id`);

--
-- Constraints for table `PenghasilanBiosolars`
--
ALTER TABLE `PenghasilanBiosolars`
  ADD CONSTRAINT `penghasilanbiosolars_ibfk_1` FOREIGN KEY (`id_penghasilan`) REFERENCES `Penghasilans` (`id`);

--
-- Constraints for table `PenghasilanDexlites`
--
ALTER TABLE `PenghasilanDexlites`
  ADD CONSTRAINT `penghasilandexlites_ibfk_1` FOREIGN KEY (`id_penghasilan`) REFERENCES `Penghasilans` (`id`);

--
-- Constraints for table `PenghasilanPertalites`
--
ALTER TABLE `PenghasilanPertalites`
  ADD CONSTRAINT `penghasilanpertalites_ibfk_1` FOREIGN KEY (`id_penghasilan`) REFERENCES `Penghasilans` (`id`);

--
-- Constraints for table `PenghasilanPertamaxes`
--
ALTER TABLE `PenghasilanPertamaxes`
  ADD CONSTRAINT `penghasilanpertamaxes_ibfk_1` FOREIGN KEY (`id_penghasilan`) REFERENCES `Penghasilans` (`id`);

--
-- Constraints for table `Penghasilans`
--
ALTER TABLE `Penghasilans`
  ADD CONSTRAINT `penghasilans_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id`);

--
-- Constraints for table `PenghasilanTurbos`
--
ALTER TABLE `PenghasilanTurbos`
  ADD CONSTRAINT `penghasilanturbos_ibfk_1` FOREIGN KEY (`id_penghasilan`) REFERENCES `Penghasilans` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
