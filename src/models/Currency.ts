import { Column, Entity, OneToMany } from 'typeorm'
import { Booking } from './Booking'
import { Payout } from './Payout'

@Entity('currency', { schema: 'bukitvista_dev' })
export class Currency {
  @Column('int', { primary: true, name: 'currency_code' })
  currencyCode: number

  @Column('varchar', { name: 'currency_label', length: 10 })
  currencyLabel: string

  @Column('varchar', { name: 'currency_desc', length: 30 })
  currencyDesc: string

  @OneToMany(
    () => Booking,
    booking => booking.bookingCurrency2,
  )
  bookings: Booking[]

  @OneToMany(
    () => Payout,
    payout => payout.bundleCurrency2,
  )
  payouts: Payout[]

  @OneToMany(
    () => Payout,
    payout => payout.payoutCurrency2,
  )
  payouts2: Payout[]
}
