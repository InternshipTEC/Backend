import { DeleteResult, getConnection, getManager, getRepository } from 'typeorm'
import { HasilTugas } from '../models/HasilTugas'

export const getHasilTugasById = async (hasilTugasId: string): Promise<HasilTugas> => {
  try {
    const hasilTugas = await getRepository(HasilTugas).findOne({ hasilTugasId })
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getOneHasilTugasByUserId = async (userId: string): Promise<HasilTugas> => {
  try {
    const hasilTugas = await getRepository(HasilTugas).findOne({ userId })
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllHasilTugasByUserId = async (userId: string): Promise<any> => {
  try {
    const [hasilTugas, count] = await getRepository(HasilTugas).findAndCount({ userId })
    return [hasilTugas, count]
  } catch (err) {
    throw err
  }
}

export const getHasilTugasByTugasId = async (tugasId: string): Promise<HasilTugas> => {
  try {
    const hasilTugas = await getRepository(HasilTugas).findOne({ tugasId })
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllHasilTugas = async (): Promise<any> => {
  try {
    const [allHasilTugas, count] = await getRepository(HasilTugas).findAndCount()
    return [allHasilTugas, count]
  } catch (err) {
    throw TypeError(err)
  }
}

export const createTugas = async (props: HasilTugas): Promise<HasilTugas> => {
  try {
    let hasilTugas = new HasilTugas()
    hasilTugas = props
    const newAbsen = await getManager().save(hasilTugas)
    return newAbsen
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateTugas = async (id: string, props: HasilTugas): Promise<any> => {
  try {
    const updated = await getConnection()
      .createQueryBuilder()
      .update(HasilTugas)
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
      .from(HasilTugas)
      .where('id = :id', { id })
      .execute()
    return deleteResult
  } catch (err) {
    throw TypeError(err)
  }
}
