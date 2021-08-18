import { Column, Entity, OneToMany } from 'typeorm'
import { ServiceProviderAvailabilityArea } from './ServiceProviderAvailabilityArea'

@Entity('service_provider', { schema: 'bukitvista_dev' })
export class ServiceProvider {
  @Column('varchar', { primary: true, name: 'service_provider_id', length: 45 })
  serviceProviderId: string

  @Column('varchar', {
    name: 'service_provider_phone',
    nullable: true,
    length: 45,
  })
  serviceProviderPhone: string | null

  @Column('varchar', {
    name: 'service_provider_address',
    nullable: true,
    length: 45,
  })
  serviceProviderAddress: string | null

  @Column('varchar', {
    name: 'service_provider_company',
    nullable: true,
    length: 45,
  })
  serviceProviderCompany: string | null

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

  @OneToMany(
    () => ServiceProviderAvailabilityArea,
    serviceProviderAvailabilityArea => serviceProviderAvailabilityArea.serviceProvider,
  )
  serviceProviderAvailabilityAreas: ServiceProviderAvailabilityArea[]
}
