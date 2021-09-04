import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Event } from './Event'
import { User } from './User'

@Entity()
export class Absen {
  @PrimaryGeneratedColumn()
  public absenId!: string

  @Column()
  public postId!: string

  @Column()
  public categoryId!: string

  @Column()
  public linkBukti!: string

  @Column({ default: false })
  public verified: boolean = false

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
