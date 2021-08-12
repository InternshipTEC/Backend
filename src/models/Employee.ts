import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { EmployeeStatus } from "./EmployeeStatus";
import { User } from "./User";

@Index("fk_employee_status", ["employeeStatus"], {})
@Entity("employee", { schema: "bukitvista_dev" })
export class Employee {
  @Column("varchar", { primary: true, name: "employee_id", length: 45 })
  employeeId: string;

  @Column("varchar", { name: "employee_name", nullable: true, length: 45 })
  employeeName: string | null;

  @Column("varchar", { name: "id_type", nullable: true, length: 32 })
  idType: string | null;

  @Column("varchar", { name: "id_number", nullable: true, length: 64 })
  idNumber: string | null;

  @Column("varchar", { name: "employee_address", nullable: true, length: 255 })
  employeeAddress: string | null;

  @Column("date", { name: "join_date", nullable: true })
  joinDate: string | null;

  @Column("date", { name: "birthdate", nullable: true })
  birthdate: string | null;

  @Column("varchar", { name: "employee_phone", nullable: true, length: 45 })
  employeePhone: string | null;

  @Column("varchar", { name: "holiday", nullable: true, length: 256 })
  holiday: string | null;

  @Column("varchar", { name: "computer_type", nullable: true, length: 256 })
  computerType: string | null;

  @Column("varchar", {
    name: "computer_serial_number",
    nullable: true,
    length: 256,
  })
  computerSerialNumber: string | null;

  @Column("varchar", { name: "phone_type", nullable: true, length: 45 })
  phoneType: string | null;

  @Column("varchar", { name: "work_phone_number", nullable: true, length: 64 })
  workPhoneNumber: string | null;

  @Column("varchar", {
    name: "personal_email_address",
    nullable: true,
    length: 45,
  })
  personalEmailAddress: string | null;

  @Column("varchar", {
    name: "bank_account_number",
    nullable: true,
    length: 45,
  })
  bankAccountNumber: string | null;

  @Column("varchar", { name: "employee_role_id", nullable: true, length: 11 })
  employeeRoleId: string | null;

  @Column("int", { name: "employee_status", nullable: true })
  employeeStatus: number | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("varchar", { name: "temp_column", nullable: true, length: 45 })
  tempColumn: string | null;

  @Column("varchar", { name: "bank_name", nullable: true, length: 255 })
  bankName: string | null;

  @Column("varchar", { name: "bank_account_name", nullable: true, length: 255 })
  bankAccountName: string | null;

  @Column("date", { name: "contract_renewal_date", nullable: true })
  contractRenewalDate: string | null;

  @Column("date", { name: "contract_expiration_date", nullable: true })
  contractExpirationDate: string | null;

  @Column("decimal", { name: "lat", nullable: true, precision: 65, scale: 30 })
  lat: string | null;

  @Column("decimal", { name: "lng", nullable: true, precision: 65, scale: 30 })
  lng: string | null;

  @ManyToOne(
    () => EmployeeStatus,
    (employeeStatus) => employeeStatus.employees,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "employee_status", referencedColumnName: "statusCode" }])
  employeeStatus2: EmployeeStatus;

  @OneToMany(() => User, (user) => user.employee)
  users: User[];
}
