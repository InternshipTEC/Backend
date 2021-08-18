import { Column, Entity } from 'typeorm'

@Entity('partner', { schema: 'bukitvista_dev' })
export class Partner {
  @Column('varchar', { primary: true, name: 'partner_id', length: 24 })
  partnerId: string

  @Column('varchar', { name: 'partner_name', nullable: true, length: 64 })
  partnerName: string | null

  @Column('datetime', { name: 'birthdate', nullable: true })
  birthdate: Date | null

  @Column('varchar', { name: 'position', nullable: true, length: 64 })
  position: string | null

  @Column('varchar', { name: 'phone_number', nullable: true, length: 32 })
  phoneNumber: string | null

  @Column('varchar', { name: 'occupation', nullable: true, length: 64 })
  occupation: string | null

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null

  @Column('varchar', { name: 'property_names', nullable: true, length: 150 })
  propertyNames: string | null

  @Column('int', {
    name: 'is_new_partner',
    nullable: true,
    default: () => "'0'",
  })
  isNewPartner: number | null

  @Column('text', { name: 'partner_notes', nullable: true })
  partnerNotes: string | null
}
