import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookingServiceProvider } from "./BookingServiceProvider";
import { ServiceProviderRoleServices } from "./ServiceProviderRoleServices";
import { Role } from "./Role";

@Index(
  "fk_service_provider_service_role_id_idx",
  ["serviceProviderServiceRoleId"],
  {}
)
@Entity("service_provider_services", { schema: "bukitvista_dev" })
export class ServiceProviderServices {
  @PrimaryGeneratedColumn({ type: "int", name: "service_provider_service_id" })
  serviceProviderServiceId: number;

  @Column("varchar", {
    name: "service_provider_service_role_id",
    nullable: true,
    length: 45,
  })
  serviceProviderServiceRoleId: string | null;

  @Column("varchar", {
    name: "service_provider_service_name",
    nullable: true,
    length: 45,
  })
  serviceProviderServiceName: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @OneToMany(
    () => BookingServiceProvider,
    (bookingServiceProvider) => bookingServiceProvider.serviceProviderService
  )
  bookingServiceProviders: BookingServiceProvider[];

  @OneToMany(
    () => ServiceProviderRoleServices,
    (serviceProviderRoleServices) =>
      serviceProviderRoleServices.serviceProviderRoleService
  )
  serviceProviderRoleServices: ServiceProviderRoleServices[];

  @ManyToOne(() => Role, (role) => role.serviceProviderServices, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    {
      name: "service_provider_service_role_id",
      referencedColumnName: "roleId",
    },
  ])
  serviceProviderServiceRole: Role;
}
