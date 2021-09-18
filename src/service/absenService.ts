import { Request } from 'express'
import { Event } from '../models/Event'
import { DeleteResult } from 'typeorm'
import { Absen } from '../models/Absen'
import * as absenRepository from '../repositories/absenRepository'
import * as eventRepository from '../repositories/eventRepository'
import * as userRepository from '../repositories/userRepository'

export const getAbsenById = async (req: Request): Promise<any> => {
  try {
    const absen = await absenRepository.getOneAbsenByUserId(req.params.id)
    return absen
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAbsenByUserId = async (req: Request): Promise<any> => {
  try {
    const absen = await absenRepository.getOneAbsenByUserId(req.params.id)
    return absen
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAbsenByEventId = async (req: Request): Promise<any> => {
  try {
    const absen = await absenRepository.getAbsenByEventId(req.params.id)
    return absen
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllAbsen = async (): Promise<Absen[]> => {
  try {
    const absen = await absenRepository.getAllAbsen()
    return absen
  } catch (err) {
    throw TypeError(err)
  }
}

export const createAbsen = async (req: Request): Promise<Absen> => {
  const { userId, eventId } = req.body
  try {
    const absen = new Absen()
    absen.user = await userRepository.getUserById(userId)
    absen.userId = absen.user.id
    absen.event = await eventRepository.getEventById(eventId)
    absen.eventId = absen.event.id
    const newAbsen = await absenRepository.createAbsen(absen)
    return newAbsen
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateAbsen = async (req: Request): Promise<Absen> => {
  try {
    const absen = await absenRepository.updateAbsen(req.params.id, req.body)
    return absen
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteAbsen = async (req: Request): Promise<DeleteResult> => {
  try {
    const result = await absenRepository.deleteAbsen(req.params.id)
    return result
  } catch (err) {
    throw TypeError(err)
  }
}

