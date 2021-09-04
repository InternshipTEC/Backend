import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Absen } from './Absen'

@Entity()
export class Event {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  name: string

  @Column()
  url: string

  @Column()
  absenStartsAt: Date

  @Column()
  absenEndedAt: Date

  @OneToMany(
    () => Absen,
    absen => absen.event,
  )
  public absen!: Absen[]
}
