import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, JoinTable, ManyToMany, OneToMany } from 'typeorm'
import { Transaction } from './Transaction'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { Absen } from './Absen'
import { HasilTugas } from './HasilTugas'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column({ unique: true })
  @IsEmail()
  email: string

  @Column({ nullable: true })
  nim: string

  @Column({ default: false })
  verified: boolean = false

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
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

  @OneToMany(
    () => Absen,
    absen => absen.user,
  )
  public absen!: Absen[]

  @OneToMany(
    () => HasilTugas,
    hasilTugas => hasilTugas.user,
  )
  public hasilTugas!: HasilTugas[]

  @Column({ default: false })
  admin: boolean = false
}
