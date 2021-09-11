import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'
import { Tugas } from './Tugas'

@Entity()
export class HasilTugas {
  @PrimaryGeneratedColumn()
  public hasilTugasId!: string

  @Column()
  public userId!: string

  @Column()
  public tugasId!: string

  @Column()
  public linkHasil!: string

  @ManyToOne(
    () => Tugas,
    tugas => tugas.hasilTugas,
  )
  public tugas!: Tugas

  @ManyToOne(
    () => User,
    user => user.hasilTugas,
  )
  public user!: User
}
