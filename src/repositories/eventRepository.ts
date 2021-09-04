import { Event } from '../models/Event'
import { DeleteResult, getConnection, getManager, getRepository } from 'typeorm'

export const getEventById = async (id: string): Promise<Event> => {
  try {
    const event = await getRepository(Event).findOne({ id })
    return event
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllEvent = async (): Promise<Event[]> => {
  try {
    const allEvent = await getRepository(Event).find()
    return allEvent
  } catch (err) {
    throw TypeError(err)
  }
}

export const createEvent = async (props: Event): Promise<Event> => {
  try {
    let event = new Event()
    event = props
    const newEvent = await getManager().save(event)
    return newEvent
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateEvent = async (id: string, props: Event): Promise<any> => {
  try {
    const updated = await getConnection()
      .createQueryBuilder()
      .update(Event)
      .set(props)
      .where('id = :id', { id })
      .execute()
    return updated
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteEvent = async (id: string): Promise<DeleteResult> => {
  try {
    const deleteResult = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Event)
      .where('id = :id', { id })
      .execute()
    return deleteResult
  } catch (err) {
    throw TypeError(err)
  }
}
