import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Event } from './Event'
import { User } from './User'

@Entity()
export class Absen {
  @PrimaryGeneratedColumn()
  public absenId!: string

  @Column()
  public userId!: string

  @Column()
  public eventId!: string

  @ManyToOne(
    () => Event,
    event => event.absen,
  )
  public event!: Event

  @ManyToOne(
    () => User,
    user => user.absen,
  )
  public user!: User
}
