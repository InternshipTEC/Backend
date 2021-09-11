import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { HasilTugas } from './HasilTugas'

@Entity()
export class Tugas {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  name: string

  @Column()
  deskripsi: string

  @Column()
  startsAt: Date

  @Column()
  endedAt: Date

  @OneToMany(
    () => HasilTugas,
    hasilTugas => hasilTugas.tugas,
  )
  public hasilTugas!: HasilTugas[]
}
