import { Column, Entity } from "typeorm";

@Entity("user")
export class User {
  @Column("varchar", { primary: true, name: "user_id", length: 45 })
  userId: string;

  @Column("tinyint", { name: "type", comment: "0-normal, 1-google", width: 1 })
  type: boolean;
}
