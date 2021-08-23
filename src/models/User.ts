import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne } from 'typeorm'
import { Transaction } from './Transaction'
import { IsEmail, IsNotEmpty } from 'class-validator'

@Entity()
@Unique(['nim', 'email'])
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  @IsEmail()
  email: string

  @Column()
  nim: string

  @Column()
  verified: boolean

  @Column()
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  password: string

  @ManyToOne(()=>Transaction,transaction=>transaction.users)
  transaction: string
}
