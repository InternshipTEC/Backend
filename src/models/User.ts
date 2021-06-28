import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'

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
