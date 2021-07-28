import { Column, Entity } from "typeorm";

@Entity("user")
export class User {
  @Column("varchar", { primary: true, name: "user_id", length: 45 })
  userId: string;

  @Column("tinyint", { name: "type", comment: "0-normal, 1-google", width: 1 })
  type: boolean;

  @Column("varchar", {
    name: "google_id",
    nullable: true,
    unique: true,
    length: 64
  })
  googleId: string | null;

  @Column("varchar", { name: "user_email", nullable: true, length: 45 })
  userEmail: string | null;

  @Column("varchar", { name: "user_type", nullable: true, length: 45 })
  userType: string | null;

  @Column("tinyint", {
    name: "is_email_verified",
    width: 1,
    default: () => "'0'"
  })
  isEmailVerified: boolean;

  @Column("tinyint", { name: "status", width: 1, default: () => "'0'" })
  status: boolean;

  @Column("varchar", { name: "user_password", nullable: true, length: 225 })
  userPassword: string | null;

  @Column("varchar", { name: "access_token", nullable: true, length: 256 })
  accessToken: string | null;

  @Column("varchar", { name: "employee_id", nullable: true, length: 45 })
  employeeId: string | null;

  @Column("varchar", {
    name: "service_provider_id",
    nullable: true,
    length: 50
  })
  serviceProviderId: string | null;

  @Column("varchar", { name: "partner_id", nullable: true, length: 24 })
  partnerId: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "logged_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP"
  })
  loggedAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("tinyint", {
    name: "is_profile",
    nullable: true,
    default: () => "'0'"
  })
  isProfile: number | null;

  @Column("varchar", { name: "image_url", nullable: true, length: 128 })
  imageUrl: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("varchar", { name: "old_user_email", nullable: true, length: 45 })
  oldUserEmail: string | null;

  @Column("int", {
    name: "is_on_boarded",
    nullable: true,
    default: () => "'0'"
  })
  isOnBoarded: number | null;

  @Column("varchar", {
    name: "locale",
    nullable: true,
    length: 15,
    default: () => "'en'"
  })
  locale: string | null;

  @Column("varchar", { name: "bank_details_id", nullable: true, length: 255 })
  bankDetailsId: string | null;

  @Column("smallint", { name: "communication", nullable: true })
  communication: number | null;

  @Column("smallint", { name: "compliance", nullable: true })
  compliance: number | null;

  @Column("smallint", { name: "participation", nullable: true })
  participation: number | null;

  @Column("smallint", { name: "logicality", nullable: true })
  logicality: number | null;

  @Column("smallint", { name: "responsiveness", nullable: true })
  responsiveness: number | null;

  @Column("smallint", { name: "flexibility", nullable: true })
  flexibility: number | null;

  @Column("tinyint", { name: "is_on_boarded_mobile", nullable: true })
  isOnBoardedMobile: number | null;
}
