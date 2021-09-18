import { Request } from 'express'
import { DeleteResult } from 'typeorm'
import { Tugas } from '../models/Tugas'
import * as tugasRepository from '../repositories/tugasRepository'

export const getTugasById = async (req: Request): Promise<any> => {
  try {
    const tugas = await tugasRepository.getTugasById(req.params.id)
    return tugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllOccuringTugas = async (): Promise<Tugas[]> => {
  try {
    const [tugas, _] = await tugasRepository.getAllTugas()
    const currentTime = new Date()
    const filteredTugas = tugas.filter(singleTugas => singleTugas.endedAt > currentTime && singleTugas.startsAt < currentTime)
    return filteredTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllTugas = async (req: Request): Promise<any[]> => {
  try {
    let tugas: any[]
    if (req.query.user_id) {
      tugas = await tugasRepository.getAllTugasByUser(req.query.user_id.toString())
      tugas = tugas.map(singleTugas => {
        const selectedTugas = { ...singleTugas, absen: !!singleTugas.absen_absen_id }
        // delete selectedEvent.absen_absen_id
        // delete selectedEvent.absen_user_id
        // delete selectedEvent.absen_event_id
        // if (new Date() < new Date(event.event_absen_starts_at) || new Date() > new Date(event.event_absen_ended_at)) {
        //   {
        //     selectedEvent.absen = true
        //   }
        // }
        console.log(selectedTugas)
        return selectedTugas
      })
    } else {
      let _
      ;[tugas, _] = await tugasRepository.getAllTugas()
    }
    return tugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const createTugas = async (req: Request): Promise<Tugas> => {
  const { name, description, startsAt, endedAt } = req.body
  try {
    const tugas = new Tugas()
    tugas.name = name
    tugas.deskripsi = description
    tugas.startsAt = new Date(startsAt)
    tugas.endedAt = new Date(endedAt)
    const newTugas = await tugasRepository.createTugas(tugas)
    return newTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateTugas = async (req: Request): Promise<Tugas> => {
  try {
    const event = await tugasRepository.updateTugas(req.params.id, req.body)
    return event
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteTugas = async (req: Request): Promise<DeleteResult> => {
  try {
    const result = await tugasRepository.deleteTugas(req.params.id)
    return result
  } catch (err) {
    throw TypeError(err)
  }
}
