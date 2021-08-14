import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { ServiceProviderRole } from './ServiceProviderRole'
import { ServiceProviderServices } from './ServiceProviderServices'

@Index('service_provider_role_service_UNIQUE', ['serviceProviderRoleIdServiceProviderRoleServiceId'], { unique: true })
@Index('fk_service_provider_role_id_idx', ['serviceProviderRoleId'], {})
@Index('fk_service_provider_role_service_id_idx', ['serviceProviderRoleServiceId'], {})
@Entity('service_provider_role_services', { schema: 'bukitvista_dev' })
export class ServiceProviderRoleServices {
  @Column('varchar', {
    name: 'service_provider_role_id',
    nullable: true,
    length: 45,
  })
  serviceProviderRoleId: string | null

  @PrimaryColumn('int', { name: 'service_provider_role_service_id' })
  serviceProviderRoleServiceId: number | null

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
    name: 'service_provider_role_id__service_provider_role_service_id',
    nullable: true,
    unique: true,
    length: 45,
  })
  serviceProviderRoleIdServiceProviderRoleServiceId: string | null

  @ManyToOne(
    () => ServiceProviderRole,
    serviceProviderRole => serviceProviderRole.serviceProviderRoleServices,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'service_provider_role_id',
      referencedColumnName: 'serviceProviderRoleId',
    },
  ])
  serviceProviderRole: ServiceProviderRole

  @ManyToOne(
    () => ServiceProviderServices,
    serviceProviderServices => serviceProviderServices.serviceProviderRoleServices,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'service_provider_role_service_id',
      referencedColumnName: 'serviceProviderServiceId',
    },
  ])
  serviceProviderRoleService: ServiceProviderServices
}
