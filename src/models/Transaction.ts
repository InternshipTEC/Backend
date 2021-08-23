import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm'
import { User } from './User'

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  photoUrl: string

  @Column()
  metode: string

  @Column()
  media: string

  @Column()
  noRekening: string

  @Column()
  pemilikRekening: string

  @Column()
  verified: boolean

  @OneToMany(
    () => User,
    user => user.transaction,
  )
  users: User[]
}
