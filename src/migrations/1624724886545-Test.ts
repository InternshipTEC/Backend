import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1624724886545 implements MigrationInterface {
    name = 'Test1624724886545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `User_attributes`");
        await queryRunner.query("ALTER TABLE `user` ADD `id` varchar(36) NOT NULL PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `user` ADD `User_attributes` json NULL");
    }

}
