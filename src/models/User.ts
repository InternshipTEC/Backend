import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsEmail, IsNotEmpty } from 'class-validator'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  @IsEmail()
  email: string

  @Column()
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  password: string
}
