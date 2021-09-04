import { getManager, getRepository } from 'typeorm'
import { TempUser } from '../models/TempUser'

export const createTempUser = async ({ email, uniqueIdentifier }: any) => {
  try {
    const tempUser = new TempUser()
    tempUser.email = email
    tempUser.uniqueIdentifier = uniqueIdentifier
    await getManager().save(tempUser)
    return tempUser
  } catch (err) {
    throw err
  }
}

export const getTempUserWithUniqueIdenfitier = async (uniqueId: string) => {
  try {
    const tempuser = await getRepository(TempUser)
      .createQueryBuilder()
      .where('unique_identifier = :uniqueId', { uniqueId })
      .getMany()
    return tempuser
  } catch (err) {
    throw TypeError(err)
  }
}

export const getTempUserByEmail = async (email: string) => {
  try {
    const tempUser = await getRepository(TempUser).findOne({ email })
    return tempUser
  } catch (err) {
    throw err
  }
}
