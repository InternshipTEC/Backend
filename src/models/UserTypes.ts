import { Column, Entity, OneToMany } from 'typeorm'
import { User } from './User'

@Entity('user_types', { schema: 'bukitvista_dev' })
export class UserTypes {
  @OneToMany(
    type => User,
    user => user.userType,
  )
  @Column('varchar', { primary: true, name: 'user_types_id', length: 24 })
  userTypesId: string

  @Column('varchar', { name: 'user_type_name', nullable: true, length: 45 })
  userTypeName: string | null

  @Column('varchar', {
    name: 'user_type_description',
    nullable: true,
    length: 45,
  })
  userTypeDescription: string | null

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null
}
