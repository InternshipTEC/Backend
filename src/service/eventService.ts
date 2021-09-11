import { Request } from 'express'
import { DeleteResult } from 'typeorm'
import { Event } from '../models/Event'
import * as eventRepository from '../repositories/eventRepository'

export const getEventById = async (req: Request): Promise<any> => {
  try {
    const transaction = await eventRepository.getEventById(req.params.id)
    return transaction
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllOccuringEvent = async (): Promise<Event[]> => {
  try {
    const transactions = await eventRepository.getAllEvent()
    const currentTime = new Date()
    const filteredTransactions = transactions.filter(transaction => transaction.absenEndedAt > currentTime && transaction.absenStartsAt < currentTime)
    return filteredTransactions
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllEvent = async (req: Request): Promise<any[]> => {
  try {
    let events: any[]
    if (req.query.user_id) {
      events = await eventRepository.getAllEventByUser(req.query.user_id.toString())
      events = events.map(event=>{
        const selectedEvent = {...event, absen:!!event.absen_absen_id}
        delete selectedEvent.absen_absen_id;
        delete selectedEvent.absen_user_id;
        delete selectedEvent.absen_event_id;
        if(new Date() < new Date(event.event_absen_starts_at) || new Date() > new Date(event.event_absen_ended_at)){{
          selectedEvent.absen = true;
        }}
        return selectedEvent
      })
    } else {
      events = await eventRepository.getAllEvent()
    }
    return events
  } catch (err) {
    throw TypeError(err)
  }
}

export const createEvent = async (req: Request): Promise<Event> => {
  const { name, description, absenStartsAt, absenEndedAt } = req.body
  try {
    const event = new Event()
    event.name = name
    event.description = description
    event.absenStartsAt = new Date(absenStartsAt)
    event.absenEndedAt = new Date(absenEndedAt)
    const newEvent = await eventRepository.createEvent(event)
    return newEvent
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateEvent = async (req: Request): Promise<Event> => {
  try {
    const event = await eventRepository.updateEvent(req.params.id, req.body)
    return event
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteEvent = async (req: Request): Promise<DeleteResult> => {
  try {
    const result = await eventRepository.deleteEvent(req.params.id)
    return result
  } catch (err) {
    throw TypeError(err)
  }
}
