import {MigrationInterface, QueryRunner} from "typeorm";

export class addAdmin1629800095907 implements MigrationInterface {
    name = 'addAdmin1629800095907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `admin` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `admin`");
    }

}
