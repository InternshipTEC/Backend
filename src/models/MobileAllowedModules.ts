import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('allowed_module_id', ['allowedModuleId'], { unique: true })
@Entity('mobile_allowed_modules', { schema: 'bukitvista_dev' })
export class MobileAllowedModules {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'allowed_module_id',
    unsigned: true,
  })
  allowedModuleId: string

  @Column('varchar', { name: 'role_id', nullable: true, length: 255 })
  roleId: string | null

  @Column('varchar', { name: 'view', nullable: true, length: 255 })
  view: string | null

  @Column('varchar', { name: 'module', nullable: true, length: 255 })
  module: string | null

  @Column('tinyint', { name: 'position', nullable: true })
  position: number | null
}
