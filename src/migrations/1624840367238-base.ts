import {MigrationInterface, QueryRunner} from "typeorm";

export class base1624840367238 implements MigrationInterface {
    name = 'base1624840367238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`");
    }

}
