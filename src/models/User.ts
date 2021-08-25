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

  @Column({nullable:true})
  nim: string

  @Column({ default: false })
  verified: boolean = false

  @Column({nullable:true})
  name: string

  @Column({nullable:true})
  fakultas: string

  @Column()
  @IsNotEmpty()
  password: string

  @ManyToOne(
    () => Transaction,
    transaction => transaction.users,
    {
      cascade: true,
    },
  )
  @JoinTable()
  transaction: Transaction


  @Column({ default: false })
  admin: boolean = false
}
