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

export const getTempUserByEmail = async (email: string) => {
  try {
    const tempUser = await getRepository(TempUser).findOne({ email })
    return tempUser
  } catch (err) {
    throw err
  }
}
