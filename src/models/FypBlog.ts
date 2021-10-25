import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { UserRole } from './FypProfile';


@Entity()
export class FypBlog {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "enum",
    enum: UserRole,
  })
  public role!: UserRole;

  @Column("longtext")
  public content!: string;
}
