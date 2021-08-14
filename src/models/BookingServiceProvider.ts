import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'
import { Booking } from './Booking'
import { Role } from './Role'
import { ServiceProviderServices } from './ServiceProviderServices'
import { User } from './User'

@Index('fk_booking_service_provider_role', ['roleId'], {})
@Index('fk_booking_service_provider_booking_id', ['bookingId'], {})
@Index('fk_booking_service_provider_service_id', ['serviceProviderServiceId'], {})
@Index('fk_booking_user_id', ['userId'], {})
@Entity('booking_service_provider', { schema: 'bukitvista_dev' })
export class BookingServiceProvider {
  @Column('varchar', {
    primary: true,
    name: 'booking_service_provider_id',
    length: 45,
  })
  bookingServiceProviderId: string

  @Column('varchar', { name: 'booking_id', nullable: true, length: 45 })
  bookingId: string | null

  @Column('varchar', { name: 'role_id', nullable: true, length: 45 })
  roleId: string | null

  @Column('int', { name: 'service_provider_service_id', nullable: true })
  serviceProviderServiceId: number | null

  @Column('varchar', { name: 'user_id', nullable: true, length: 45 })
  userId: string | null

  @Column('text', { name: 'notes', nullable: true })
  notes: string | null

  @Column('varchar', { name: 'created_by', nullable: true, length: 45 })
  createdBy: string | null

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null

  @Column('timestamp', {
    name: 'updated_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date | null

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null

  @Column('varchar', { name: 'deleted_by', nullable: true, length: 45 })
  deletedBy: string | null

  @ManyToOne(
    () => Booking,
    booking => booking.bookingServiceProviders,
    {
      onDelete: 'CASCADE',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn([{ name: 'booking_id', referencedColumnName: 'bookingId' }])
  booking: Booking

  @ManyToOne(
    () => Role,
    role => role.bookingServiceProviders,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'roleId' }])
  role: Role

  @ManyToOne(
    () => ServiceProviderServices,
    serviceProviderServices => serviceProviderServices.bookingServiceProviders,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([
    {
      name: 'service_provider_service_id',
      referencedColumnName: 'serviceProviderServiceId',
    },
  ])
  serviceProviderService: ServiceProviderServices

  @ManyToOne(
    () => User,
    user => user.bookingServiceProviders,
    {
      onDelete: 'CASCADE',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: User
}
