import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { BookingCommChannel } from './BookingCommChannel'
import { Channel } from './Channel'
import { Currency } from './Currency'
import { BookingServiceProvider } from './BookingServiceProvider'
import { GuestJourneyStatusTracking } from './GuestJourneyStatusTracking'

@Index('fk_booking_listing1_idx', ['listingId'], {})
@Index('checkout_index', ['bookingCheckOut'], {})
@Index('guestname_index', ['bookingGuestName'], {})
@Index('received_index', ['bookingReceivedTimestamp'], {})
@Index('checkin_guestname_index', ['bookingCheckIn', 'bookingGuestName'], {})
@Index('checkout_guestname_index', ['bookingCheckOut', 'bookingGuestName'], {})
@Index('checkin_index', ['bookingCheckIn'], {})
@Index('currency', ['bookingCurrency'], {})
@Index('booking_source', ['bookingSource'], {})
@Index('booking_status', ['bookingStatus'], {})
@Index('booking_guest_status', ['bookingGuestStatus'], {})
@Index('booking_comm_channel', ['bookingCommChannel'], {})
@Entity('booking', { schema: 'bukitvista_dev' })
export class Booking {
  @Column('varchar', { primary: true, name: 'booking_id', length: 45 })
  bookingId: string

  @Column('varchar', { name: 'booking_guest_name', nullable: true, length: 85 })
  bookingGuestName: string | null

  @Column('varchar', { name: 'booking_guest_id', nullable: true, length: 45 })
  bookingGuestId: string | null

  @Column('int', { name: 'booking_status', nullable: true })
  bookingStatus: number | null

  @Column('date', { name: 'booking_check_in', nullable: true })
  bookingCheckIn: string | null

  @Column('date', { name: 'booking_check_out', nullable: true })
  bookingCheckOut: string | null

  @Column('varchar', {
    name: 'booking_guest_number',
    nullable: true,
    length: 60,
  })
  bookingGuestNumber: string | null

  @Column('varchar', {
    name: 'booking_guest_phone',
    nullable: true,
    length: 45,
  })
  bookingGuestPhone: string | null

  @Column('text', { name: 'booking_guest_eta', nullable: true })
  bookingGuestEta: string | null

  @Column('int', { name: 'booking_guest_status', nullable: true })
  bookingGuestStatus: number | null

  @Column('int', { name: 'booking_comm_channel', nullable: true })
  bookingCommChannel: number | null

  @Column('decimal', {
    name: 'booking_earned',
    nullable: true,
    precision: 11,
    scale: 2,
  })
  bookingEarned: string | null

  @Column('int', { name: 'booking_currency', nullable: true })
  bookingCurrency: number | null

  @Column('int', { name: 'booking_source', nullable: true })
  bookingSource: number | null

  @Column('varchar', {
    name: 'booking_conversation_url',
    nullable: true,
    length: 100,
  })
  bookingConversationUrl: string | null

  @Column('timestamp', { name: 'booking_received_timestamp', nullable: true })
  bookingReceivedTimestamp: Date | null

  @Column('int', { name: 'booking_altered', nullable: true })
  bookingAltered: number | null

  @Column('varchar', { name: 'guest_details', nullable: true, length: 200 })
  guestDetails: string | null

  @Column('int', {
    name: 'guest_journey_status',
    nullable: true,
    default: () => "'1'",
  })
  guestJourneyStatus: number | null

  @Column('varchar', { name: 'listing_id', length: 45 })
  listingId: string

  @Column('varchar', {
    name: 'cancellation_policy',
    nullable: true,
    length: 45,
  })
  cancellationPolicy: string | null

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

  @Column('decimal', {
    name: 'cancellation_value',
    nullable: true,
    precision: 11,
    scale: 2,
  })
  cancellationValue: string | null

  @Column('varchar', { name: 'temp_column', nullable: true, length: 225 })
  tempColumn: string | null

  @Column('int', {
    name: 'booking_comment_count',
    nullable: true,
    default: () => "'0'",
  })
  bookingCommentCount: number | null

  @Column('int', { name: 'resolution', nullable: true })
  resolution: number | null

  @Column('date', { name: 'resolution_date', nullable: true })
  resolutionDate: string | null

  @Column('int', { name: 'campaign_id', nullable: true })
  campaignId: number | null

  @Column('varchar', { name: 'payment_code', nullable: true, length: 11 })
  paymentCode: string | null

  @Column('varchar', { name: 'review_edit_id', nullable: true, length: 11 })
  reviewEditId: string | null

  @ManyToOne(
    () => BookingCommChannel,
    bookingCommChannel => bookingCommChannel.bookings,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([
    {
      name: 'booking_comm_channel',
      referencedColumnName: 'bookingCommChannel',
    },
  ])
  bookingCommChannel2: BookingCommChannel

  @ManyToOne(
    () => Channel,
    channel => channel.bookings,
    {
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    },
  )
  @JoinColumn([{ name: 'booking_source', referencedColumnName: 'channelCode' }])
  bookingSource2: Channel

  @ManyToOne(
    () => Currency,
    currency => currency.bookings,
    {
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    },
  )
  @JoinColumn([{ name: 'booking_currency', referencedColumnName: 'currencyCode' }])
  bookingCurrency2: Currency

  @OneToMany(
    () => BookingServiceProvider,
    bookingServiceProvider => bookingServiceProvider.booking,
  )
  bookingServiceProviders: BookingServiceProvider[]

  @OneToMany(
    () => GuestJourneyStatusTracking,
    guestJourneyStatusTracking => guestJourneyStatusTracking.booking,
  )
  guestJourneyStatusTrackings: GuestJourneyStatusTracking[]
}
