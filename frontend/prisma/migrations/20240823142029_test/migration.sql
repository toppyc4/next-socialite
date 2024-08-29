-- CreateTable
CREATE TABLE `Users` (
    `user_id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Users_user_id_key`(`user_id`),
    UNIQUE INDEX `Users_username_key`(`username`),
    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Interests` (
    `interest_id` VARCHAR(191) NOT NULL,
    `interest_name` VARCHAR(191) NOT NULL,
    `interest_type` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Interests_interest_id_key`(`interest_id`),
    UNIQUE INDEX `Interests_interest_name_key`(`interest_name`),
    PRIMARY KEY (`interest_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JustArrivedInterests` (
    `interest_id` VARCHAR(191) NOT NULL,
    `interest_name` VARCHAR(191) NOT NULL,
    `interest_type` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `JustArrivedInterests_interest_id_key`(`interest_id`),
    UNIQUE INDEX `JustArrivedInterests_interest_name_key`(`interest_name`),
    PRIMARY KEY (`interest_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
