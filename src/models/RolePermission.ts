import { Column, Entity, Index } from "typeorm";

@Index("fk_permission_has_role_permission1_idx", ["rolePermissionId"], {})
@Entity("role_permission", { schema: "bukitvista_dev" })
export class RolePermission {
  @Column("varchar", { primary: true, name: "role_permission_id", length: 45 })
  rolePermissionId: string;

  @Column("varchar", { primary: true, name: "permission_id", length: 45 })
  permissionId: string;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("varchar", { name: "temp_column", nullable: true, length: 45 })
  tempColumn: string | null;
}
