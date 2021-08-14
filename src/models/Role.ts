import { Column, Entity, OneToMany } from 'typeorm'
import { BookingServiceProvider } from './BookingServiceProvider'
import { ServiceProviderServices } from './ServiceProviderServices'
import { SurveyAudienceRoles } from './SurveyAudienceRoles'

@Entity('role', { schema: 'bukitvista_dev' })
export class Role {
  @Column('varchar', { primary: true, name: 'role_id', length: 45 })
  roleId: string

  @Column('varchar', { name: 'role_name', nullable: true, length: 45 })
  roleName: string | null

  @Column('tinyint', {
    name: 'role_type',
    comment: '0-employee, 1-partner',
    width: 1,
  })
  roleType: boolean

  @Column('varchar', { name: 'role_description', nullable: true, length: 225 })
  roleDescription: string | null

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null

  @Column('varchar', { name: 'temp_column', nullable: true, length: 45 })
  tempColumn: string | null

  @Column('varchar', { name: 'user_type', nullable: true, length: 24 })
  userType: string | null

  @Column('int', { name: 'is_active', nullable: true, default: () => "'1'" })
  isActive: number | null

  @OneToMany(
    () => BookingServiceProvider,
    bookingServiceProvider => bookingServiceProvider.role,
  )
  bookingServiceProviders: BookingServiceProvider[]

  @OneToMany(
    () => ServiceProviderServices,
    serviceProviderServices => serviceProviderServices.serviceProviderServiceRole,
  )
  serviceProviderServices: ServiceProviderServices[]

  @OneToMany(
    () => SurveyAudienceRoles,
    surveyAudienceRoles => surveyAudienceRoles.role,
  )
  surveyAudienceRoles: SurveyAudienceRoles[]
}
