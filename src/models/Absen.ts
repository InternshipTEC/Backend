import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Event } from './Event'
import { User } from './User'

@Unique(['userId', 'eventId'])
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
