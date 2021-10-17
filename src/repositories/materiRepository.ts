import { Materi } from '../models/Materi'
import { DeleteResult, getConnection, getManager, getRepository } from 'typeorm'

export const getMateriById = async (id: string): Promise<Materi> => {
  try {
    const materi = await getRepository(Materi).findOne({ id })
    return materi
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllMateri = async (): Promise<[Materi[], number]> => {
  try {
    const [allMateri, count] = await getRepository(Materi).findAndCount()
    return [allMateri, count]
  } catch (err) {
    throw TypeError(err)
  }
}

export const createMateri = async (props: Materi): Promise<Materi> => {
  try {
    let materi = new Materi()
    materi = props
    const newMateri = await getManager().save(materi)
    return newMateri
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateMateri = async (id: string, props: Materi): Promise<any> => {
  try {
    const updated = await getConnection()
      .createQueryBuilder()
      .update(Materi)
      .set(props)
      .where('id = :id', { id })
      .execute()
    return updated
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteMateri = async (id: string): Promise<DeleteResult> => {
  try {
    const deleteResult = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Materi)
      .where('id = :id', { id })
      .execute()
    return deleteResult
  } catch (err) {
    throw TypeError(err)
  }
}
