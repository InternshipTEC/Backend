import {MigrationInterface, QueryRunner} from "typeorm";

export class base1628029207029 implements MigrationInterface {
    name = 'base1628029207029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `fk_user_employee1`");
        await queryRunner.query("DROP INDEX `google_id` ON `user`");
        await queryRunner.query("DROP INDEX `fk_user_employee1_idx` ON `user`");
        await queryRunner.query("DROP INDEX `employee_id` ON `user`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `google_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `user_email`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `user_type`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_email_verified`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `user_password`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `access_token`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `employee_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `service_provider_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `partner_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `logged_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `deleted_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `token`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_profile`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `image_url`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `old_user_email`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_on_boarded`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `locale`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `bank_details_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `communication`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `compliance`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `participation`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `logicality`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `responsiveness`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `flexibility`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_on_boarded_mobile`");
        await queryRunner.query("ALTER TABLE `user` ADD `google_id` varchar(64) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_7adac5c0b28492eb292d4a9387` (`google_id`)");
        await queryRunner.query("ALTER TABLE `user` ADD `user_email` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `user_type` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `is_email_verified` tinyint(1) NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` ADD `status` tinyint(1) NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` ADD `user_password` varchar(225) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `access_token` varchar(256) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `employee_id` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `service_provider_id` varchar(50) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `partner_id` varchar(24) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `user` ADD `logged_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` timestamp NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `deleted_at` timestamp NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `is_profile` tinyint NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` ADD `image_url` varchar(128) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `old_user_email` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `is_on_boarded` int NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` ADD `locale` varchar(15) NULL DEFAULT 'en'");
        await queryRunner.query("ALTER TABLE `user` ADD `bank_details_id` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `communication` smallint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `compliance` smallint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `participation` smallint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `logicality` smallint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `responsiveness` smallint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `flexibility` smallint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `is_on_boarded_mobile` tinyint NULL");
        await queryRunner.query("INSERT INTO `user` (user_id,type,google_id,user_email,user_type,is_email_verified,status,user_password,access_token,employee_id,service_provider_id,partner_id,created_at,logged_at,updated_at,deleted_at) VALUES (3d4f96bca1a0747cf418333d,1,WRFfZM9fNqe5KcTqQszbJtLb1d53,superhost@iukitvistabali.com,5d304d8765eea901bff7542e,1,1,bukitvista,ya29.a0AfH6SMD7752P8Xje0YJRPLi871Xo6bqzSmaJG0pZvLXKT25wxUqSsvVcP4v1FvIZos9Q_q8x5DmxpHiye_1Ix7C63WMIs4r4HN2hjGMAzVl6H1vr4krRwltpgaxpl6fsKf3tLozWIWJiDvKWmXWr_eRW9uwJyg,5d4f9711a1a0747cf418333e,11/08/2019,04:17:01,28/07/2021,08:38:05,28/07/2021,08:38:05,00/01/1900,00:00:00)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_on_boarded_mobile`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `flexibility`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `responsiveness`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `logicality`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `participation`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `compliance`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `communication`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `bank_details_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `locale`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_on_boarded`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `old_user_email`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `image_url`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_profile`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `deleted_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `logged_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `partner_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `service_provider_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `employee_id`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `access_token`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `user_password`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `is_email_verified`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `user_type`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `user_email`");
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_7adac5c0b28492eb292d4a9387`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `google_id`");
        await queryRunner.query("ALTER TABLE `user` ADD `is_on_boarded_mobile` tinyint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `flexibility` tinyint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `responsiveness` tinyint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `logicality` tinyint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `participation` tinyint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `compliance` tinyint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `communication` tinyint NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `bank_details_id` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `locale` varchar(15) NULL DEFAULT 'en'");
        await queryRunner.query("ALTER TABLE `user` ADD `is_on_boarded` int NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` ADD `old_user_email` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `image_url` varchar(128) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `is_profile` tinyint NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` ADD `token` varchar(512) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `deleted_at` timestamp NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `user` ADD `logged_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `user` ADD `partner_id` varchar(24) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `service_provider_id` varchar(50) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `employee_id` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `access_token` varchar(256) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `user_password` varchar(225) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `status` tinyint(1) NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` ADD `is_email_verified` tinyint(1) NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` ADD `user_type` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `user_email` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `google_id` varchar(64) NULL");
        await queryRunner.query("CREATE INDEX `employee_id` ON `user` (`employee_id`)");
        await queryRunner.query("CREATE INDEX `fk_user_employee1_idx` ON `user` (`employee_id`)");
        await queryRunner.query("CREATE UNIQUE INDEX `google_id` ON `user` (`google_id`)");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `fk_user_employee1` FOREIGN KEY (`employee_id`) REFERENCES `employee`(`employee_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
