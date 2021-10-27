import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm'
import { User } from './User'

export enum UserRole {
  HACKER = 'hacker',
  HIPSTER = 'hipter',
  HUSTLER = 'hustler',
}

@Entity()
export class FypProfile {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  public role!: UserRole

  @Column('longtext')
  public desc!: string

  @Column()
  public photoUrl!: string

  @OneToOne(
    type => User,
    user => user.fypProfile,
  )
  user: User
}

export const toEnumUserRole = (userRole: string): UserRole => {
  let enumResult
  switch (userRole) {
    case UserRole.HACKER.valueOf():
      enumResult = UserRole.HACKER
      break
    case UserRole.HIPSTER.valueOf():
      enumResult = UserRole.HIPSTER
      break
    case UserRole.HUSTLER.valueOf():
      enumResult = UserRole.HUSTLER
      break
    default:
      break
  }
  return enumResult
}
