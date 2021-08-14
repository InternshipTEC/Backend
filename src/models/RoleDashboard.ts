import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('role_dashboard_id', ['roleDashboardId'], { unique: true })
@Entity('role_dashboard', { schema: 'bukitvista_dev' })
export class RoleDashboard {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'role_dashboard_id',
    unsigned: true,
  })
  roleDashboardId: string

  @Column('varchar', { name: 'role_id', nullable: true, length: 255 })
  roleId: string | null

  @Column('varchar', { name: 'dashboard_item_id', nullable: true, length: 255 })
  dashboardItemId: string | null
}
