import { DeleteResult, getConnection, getManager, getRepository } from 'typeorm'
import { Absen } from '../models/Absen'

export const getAbsenById = async (absenId: string): Promise<Absen> => {
  try {
    const absen = await getRepository(Absen).findOne({ absenId })
    return absen
  } catch (err) {
    throw TypeError(err)
  }
}

export const getOneAbsenByUserId = async (userId: string): Promise<Absen> => {
  try {
    const absen = await getRepository(Absen).findOne({ userId })
    return absen
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllAbsenByUserId = async (userId: string): Promise<any> => {
  try {
    const [absen, count] = await getRepository(Absen).findAndCount({ userId })
    return [absen, count]
  } catch(err) {
    throw err
  }
}

export const getAbsenByEventId = async (eventId: string): Promise<Absen> => {
  try {
    const event = await getRepository(Absen).findOne({ eventId })
    return event
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllAbsen = async (): Promise<any> => {
  try {
    const [allAbsen, count] = await getRepository(Absen).findAndCount()
    return [allAbsen, count]
  } catch (err) {
    throw TypeError(err)
  }
}

export const createAbsen = async (props: Absen): Promise<Absen> => {
  try {
    let absen = new Absen()
    absen = props
    const newAbsen = await getManager().save(absen)
    return newAbsen
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateAbsen = async (id: string, props: Absen): Promise<any> => {
  try {
    const updated = await getConnection()
      .createQueryBuilder()
      .update(Absen)
      .set(props)
      .where('id = :id', { id })
      .execute()
    return updated
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteAbsen = async (id: string): Promise<DeleteResult> => {
  try {
    const deleteResult = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Absen)
      .where('id = :id', { id })
      .execute()
    return deleteResult
  } catch (err) {
    throw TypeError(err)
  }
}

