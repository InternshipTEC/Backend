import { Column, Entity } from "typeorm";

@Entity("admin_role", { schema: "bukitvista_dev" })
export class AdminRole {
  @Column("varchar", { primary: true, name: "ar_id", length: 24 })
  arId: string;

  @Column("varchar", { name: "admin_id", nullable: true, length: 45 })
  adminId: string | null;

  @Column("varchar", { name: "role_permission_id", nullable: true, length: 45 })
  rolePermissionId: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
