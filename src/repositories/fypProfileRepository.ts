import { FypProfile, toEnumUserRole } from '../models/FypProfile'
import { DeleteResult, getConnection, getManager, getRepository } from 'typeorm'

export const getAllFypProfile = async (): Promise<[FypProfile[], number]> => {
  try {
    const [allFypProfile, count] = await getRepository(FypProfile).findAndCount({ relations: ['user'] })
    return [allFypProfile, count]
  } catch (err) {
    throw TypeError(err)
  }
}

export const getFypProfileById = async (id: string): Promise<FypProfile> => {
  const intId = Number(id)
  try {
    const fypProfile = await getRepository(FypProfile).findOne({ id: intId })
    return fypProfile
  } catch (err) {
    throw TypeError(err)
  }
}

export const createFypProfile = async (props: FypProfile): Promise<FypProfile> => {
  try {
    let fypProfile = new FypProfile()
    fypProfile = props
    const newFypProfile = await getManager().save(fypProfile)
    return newFypProfile
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateFypProfile = async (id: string, props: FypProfile): Promise<any> => {
  try {
    const updated = await getConnection()
      .createQueryBuilder()
      .update(FypProfile)
      .set({ ...props, role: toEnumUserRole(props.role) })
      .where('id = :id', { id })
      .execute()
    return updated
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteFypProfile = async (id: string): Promise<DeleteResult> => {
  try {
    const deleteResult = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(FypProfile)
      .where('id = :id', { id })
      .execute()
    return deleteResult
  } catch (err) {
    throw TypeError(err)
  }
}
