-- CreateTable
CREATE TABLE `Korisnik` (
    `id` VARCHAR(191) NOT NULL,
    `ime` VARCHAR(191) NOT NULL,
    `prezime` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `BrTelefona` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Korisnik_username_key`(`username`),
    UNIQUE INDEX `Korisnik_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proizvod` (
    `id` VARCHAR(191) NOT NULL,
    `ime` VARCHAR(191) NOT NULL,
    `slika` VARCHAR(191) NOT NULL,
    `kategorija` VARCHAR(191) NOT NULL,
    `cena` DOUBLE NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `boja` VARCHAR(191) NOT NULL,
    `brVrata` INTEGER NOT NULL DEFAULT 4,
    `description` VARCHAR(191) NULL DEFAULT '/',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
