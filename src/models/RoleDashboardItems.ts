import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('dashboard_item_id', ['dashboardItemId'], { unique: true })
@Entity('role_dashboard_items', { schema: 'bukitvista_dev' })
export class RoleDashboardItems {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'dashboard_item_id',
    unsigned: true,
  })
  dashboardItemId: string

  @Column('varchar', { name: 'dashboard_name', nullable: true, length: 255 })
  dashboardName: string | null

  @Column('varchar', { name: 'dashboard_type', nullable: true, length: 255 })
  dashboardType: string | null
}
