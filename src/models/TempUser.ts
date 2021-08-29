import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, JoinTable } from 'typeorm'
import { Transaction } from './Transaction'

@Entity()
export class TempUser {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  uniqueIdentifier: string
}
