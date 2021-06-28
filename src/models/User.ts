import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { IsEmail, IsNotEmpty} from 'class-validator'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: String

  @Column({unique:true})
  @IsEmail()
  email: String

  @Column()
  @IsNotEmpty()
  name: String

  @Column()
  @IsNotEmpty()
  password: String
}
