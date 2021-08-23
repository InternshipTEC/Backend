import { MigrationInterface, QueryRunner } from 'typeorm'

export class alterUser1629717968236 implements MigrationInterface {
  name = 'alterUser1629717968236'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`')
    await queryRunner.query('CREATE UNIQUE INDEX `IDX_64300667e061229048bd6bbcef` ON `user` (`nim`, `email`)')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX `IDX_64300667e061229048bd6bbcef` ON `user`')
    await queryRunner.query('CREATE UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user` (`email`)')
  }
}
