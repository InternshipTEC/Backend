import { Column, Entity, OneToMany } from "typeorm";
import { ServiceProviderRoleServices } from "./ServiceProviderRoleServices";

@Entity("service_provider_role", { schema: "bukitvista_dev" })
export class ServiceProviderRole {
  @Column("varchar", {
    primary: true,
    name: "service_provider_role_id",
    length: 24,
  })
  serviceProviderRoleId: string;

  @Column("varchar", { name: "service_provider_id", length: 45 })
  serviceProviderId: string;

  @Column("varchar", { name: "role_permission_id", length: 24 })
  rolePermissionId: string;

  @Column("tinyint", {
    name: "is_active",
    nullable: true,
    default: () => "'1'",
  })
  isActive: number | null;

  @OneToMany(
    () => ServiceProviderRoleServices,
    (serviceProviderRoleServices) =>
      serviceProviderRoleServices.serviceProviderRole
  )
  serviceProviderRoleServices: ServiceProviderRoleServices[];
}
