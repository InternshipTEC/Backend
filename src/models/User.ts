import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, JoinTable } from 'typeorm'
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

  @Column({ default: false })
  verified: boolean = false

  @Column()
  @IsNotEmpty()
  name: string

  @Column()
  @IsNotEmpty()
  password: string

  @ManyToOne(
    () => Transaction,
    transaction => transaction.users,
    {
      cascade:true
    }
  )
  @JoinTable()
  transaction: Transaction
}
