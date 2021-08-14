import { Column, Entity, Index } from 'typeorm'

@Index('view_id', ['viewId'], { unique: true })
@Entity('mobile_view', { schema: 'bukitvista_dev' })
export class MobileView {
  @Column('varchar', { primary: true, name: 'view_id', length: 255 })
  viewId: string

  @Column('varchar', { name: 'view_name', nullable: true, length: 255 })
  viewName: string | null

  @Column('tinyint', { name: 'navigation_item', nullable: true, width: 1 })
  navigationItem: boolean | null
}
