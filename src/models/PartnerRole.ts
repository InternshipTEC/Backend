import { Column, Entity } from "typeorm";

@Entity("partner_role", { schema: "bukitvista_dev" })
export class PartnerRole {
  @Column("varchar", { primary: true, name: "partner_role_id", length: 24 })
  partnerRoleId: string;

  @Column("varchar", { name: "partner_id", nullable: true, length: 24 })
  partnerId: string | null;

  @Column("varchar", { name: "role_permission_id", nullable: true, length: 24 })
  rolePermissionId: string | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
