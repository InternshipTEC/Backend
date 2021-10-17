import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Materi {
  @PrimaryGeneratedColumn()
  public id!: string

  @Column()
  public judul!: string

  @Column()
  public deskripsi!: string

  @Column()
  public link!: string
}
