import {MigrationInterface, QueryRunner} from "typeorm";

export class base1628316588301 implements MigrationInterface {
    name = 'base1628316588301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`user_id` varchar(45) NOT NULL, `type` tinyint(1) NOT NULL COMMENT '0-normal, 1-google', PRIMARY KEY (`user_id`)) ENGINE=InnoDB");
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
        await queryRunner.query("DROP TABLE `user`");
    }

}
