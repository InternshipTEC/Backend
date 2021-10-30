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
    case "hacker":
      enumResult = UserRole.HACKER
      break
    case "hipster":
      enumResult = UserRole.HIPSTER
      break
    case "hustler":
      enumResult = UserRole.HUSTLER
      break
    default:
      break
  }
  return enumResult
}
