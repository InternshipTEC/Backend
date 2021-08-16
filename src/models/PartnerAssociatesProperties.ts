import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("partner_associates_properties", { schema: "bukitvista_dev" })
export class PartnerAssociatesProperties {
  @Column("varchar", { name: "partner_id", length: 24 })
  partnerId: string;

  @Column("varchar", { name: "property_id", length: 45 })
  propertyId: string;

  @PrimaryColumn("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
