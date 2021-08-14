import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Booking } from './Booking'
import { User } from './User'

@Index('fk_guest_journey_status_tracking_user_id_idx', ['userId'], {})
@Index('fk_guest_journey_status_tracking_booking_id_idx', ['bookingId'], {})
@Entity('guest_journey_status_tracking', { schema: 'bukitvista_dev' })
export class GuestJourneyStatusTracking {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'guest_journey_status_tracking_id',
  })
  guestJourneyStatusTrackingId: number

  @Column('varchar', { name: 'user_id', nullable: true, length: 45 })
  userId: string | null

  @Column('varchar', { name: 'booking_id', nullable: true, length: 45 })
  bookingId: string | null

  @Column('int', { name: 'guest_journey_status', nullable: true })
  guestJourneyStatus: number | null

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

  @Column('longtext', { name: 'notes', nullable: true })
  notes: string | null

  @ManyToOne(
    () => Booking,
    booking => booking.guestJourneyStatusTrackings,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn([{ name: 'booking_id', referencedColumnName: 'bookingId' }])
  booking: Booking

  @ManyToOne(
    () => User,
    user => user.guestJourneyStatusTrackings,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: User
}
