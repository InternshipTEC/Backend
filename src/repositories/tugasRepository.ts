import { Tugas } from '../models/Tugas'
import { DeleteResult, getConnection, getManager, getRepository } from 'typeorm'

export const getTugasById = async (id: string): Promise<Tugas> => {
  try {
    const tugas = await getRepository(Tugas).findOne({ id })
    return tugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllTugasByUser = async (userId: string): Promise<any[]> => {
  try {
    const allTugas = await getRepository(Tugas)
      .createQueryBuilder('tugas')
      .leftJoinAndSelect('tugas.hasil_tugas', 'hasil_tugas', 'hasil_tugas.user_id= :userId', { userId })
      .getRawMany()
    return allTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllTugas = async (): Promise<[Tugas[], number]> => {
  try {
    const [allTugas, count] = await getRepository(Tugas).findAndCount()
    return [allTugas, count]
  } catch (err) {
    throw TypeError(err)
  }
}

export const createTugas = async (props: Tugas): Promise<Tugas> => {
  try {
    let tugas = new Tugas()
    tugas = props
    const newEvent = await getManager().save(tugas)
    return newEvent
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateTugas = async (id: string, props: Tugas): Promise<any> => {
  try {
    const updated = await getConnection()
      .createQueryBuilder()
      .update(Tugas)
      .set(props)
      .where('id = :id', { id })
      .execute()
    return updated
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteTugas = async (id: string): Promise<DeleteResult> => {
  try {
    const deleteResult = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Tugas)
      .where('id = :id', { id })
      .execute()
    return deleteResult
  } catch (err) {
    throw TypeError(err)
  }
}
