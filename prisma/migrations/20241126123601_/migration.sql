/*
  Warnings:

  - You are about to drop the column `boja` on the `proizvod` table. All the data in the column will be lost.
  - You are about to drop the column `kategorija` on the `proizvod` table. All the data in the column will be lost.
  - Added the required column `brSedista` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `godiste` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gorivo` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `karoserija` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kubikaza` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marka` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `snagaMotora` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spoljasnjaBoja` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unutrasnjaBoja` to the `Proizvod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zemljaUvoza` to the `Proizvod` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `proizvod` DROP COLUMN `boja`,
    DROP COLUMN `kategorija`,
    ADD COLUMN `brSedista` INTEGER NOT NULL,
    ADD COLUMN `godiste` YEAR NOT NULL,
    ADD COLUMN `gorivo` VARCHAR(191) NOT NULL,
    ADD COLUMN `karoserija` VARCHAR(191) NOT NULL,
    ADD COLUMN `kubikaza` INTEGER NOT NULL,
    ADD COLUMN `marka` VARCHAR(191) NOT NULL,
    ADD COLUMN `snagaMotora` VARCHAR(191) NOT NULL,
    ADD COLUMN `spoljasnjaBoja` VARCHAR(191) NOT NULL,
    ADD COLUMN `unutrasnjaBoja` VARCHAR(191) NOT NULL,
    ADD COLUMN `zemljaUvoza` VARCHAR(191) NOT NULL,
    ALTER COLUMN `brVrata` DROP DEFAULT;

-- CreateTable
CREATE TABLE `ListaZelja` (
    `korisnik_id` VARCHAR(191) NOT NULL,
    `proizvod_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`korisnik_id`, `proizvod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Korpa` (
    `korisnik_id` VARCHAR(191) NOT NULL,
    `proizvod_id` VARCHAR(191) NOT NULL,
    `kolicina` INTEGER NOT NULL,

    PRIMARY KEY (`korisnik_id`, `proizvod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ListaZelja` ADD CONSTRAINT `ListaZelja_korisnik_id_fkey` FOREIGN KEY (`korisnik_id`) REFERENCES `Korisnik`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaZelja` ADD CONSTRAINT `ListaZelja_proizvod_id_fkey` FOREIGN KEY (`proizvod_id`) REFERENCES `Proizvod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Korpa` ADD CONSTRAINT `Korpa_korisnik_id_fkey` FOREIGN KEY (`korisnik_id`) REFERENCES `Korisnik`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Korpa` ADD CONSTRAINT `Korpa_proizvod_id_fkey` FOREIGN KEY (`proizvod_id`) REFERENCES `Proizvod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
