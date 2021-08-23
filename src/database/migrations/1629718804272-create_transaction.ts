import {MigrationInterface, QueryRunner} from "typeorm";

export class createTransaction1629718804272 implements MigrationInterface {
    name = 'createTransaction1629718804272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `transaction` (`id` varchar(36) NOT NULL, `photo_url` varchar(255) NOT NULL, `metode` varchar(255) NOT NULL, `media` varchar(255) NOT NULL, `no_rekening` varchar(255) NOT NULL, `pemilik_rekening` varchar(255) NOT NULL, `verified` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD `transaction_id` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_e36b77a5263ac0f191277c4c5d2` FOREIGN KEY (`transaction_id`) REFERENCES `transaction`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_e36b77a5263ac0f191277c4c5d2`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `transaction_id`");
        await queryRunner.query("DROP TABLE `transaction`");
    }

}
