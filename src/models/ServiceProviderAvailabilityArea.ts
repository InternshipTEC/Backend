import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ServiceProvider } from './ServiceProvider'

@Index('service_provider_area_UNIQUE', ['serviceProviderIdServiceProviderAvailabilityAreaId'], { unique: true })
@Index('fk_service_provider_availability_area_service_provider_id_idx', ['serviceProviderId'], {})
@Entity('service_provider_availability_area', { schema: 'bukitvista_dev' })
export class ServiceProviderAvailabilityArea {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'service_provider_availability_area_id',
  })
  serviceProviderAvailabilityAreaId: number

  @Column('varchar', {
    name: 'service_provider_id',
    nullable: true,
    length: 45,
  })
  serviceProviderId: string | null

  @Column('varchar', { name: 'area_id', nullable: true, length: 45 })
  areaId: string | null

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

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    default: () => "'1'",
  })
  isActive: number | null

  @Column('varchar', {
    name: 'service_provider_id__service_provider_availability_area_id',
    nullable: true,
    unique: true,
    length: 45,
  })
  serviceProviderIdServiceProviderAvailabilityAreaId: string | null

  @ManyToOne(
    () => ServiceProvider,
    serviceProvider => serviceProvider.serviceProviderAvailabilityAreas,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'service_provider_id', referencedColumnName: 'serviceProviderId' }])
  serviceProvider: ServiceProvider
}
