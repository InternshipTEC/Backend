import { Request } from 'express'
import { DeleteResult } from 'typeorm'
import { HasilTugas } from '../models/HasilTugas'
import * as hasilTugasRepository from '../repositories/hasilTugasRepository'
import * as tugasRepository from '../repositories/tugasRepository'
import * as userRepository from '../repositories/userRepository'

export const getAbsenById = async (req: Request): Promise<any> => {
  try {
    const hasilTugas = await hasilTugasRepository.getOneHasilTugasByUserId(req.params.id)
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAbsenByUserId = async (req: Request): Promise<any> => {
  try {
    const hasilTugas = await hasilTugasRepository.getOneHasilTugasByUserId(req.params.id)
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAbsenByEventId = async (req: Request): Promise<any> => {
  try {
    const hasilTugas = await hasilTugasRepository.getHasilTugasByTugasId(req.params.id)
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllAbsen = async (): Promise<HasilTugas[]> => {
  try {
    const hasilTugas = await hasilTugasRepository.getAllHasilTugas()
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const createAbsen = async (req: Request): Promise<HasilTugas> => {
  const { userId, tugasId, linkHasil } = req.body
  try {
    const hasilTugas = new HasilTugas()
    hasilTugas.user = await userRepository.getUserById(userId)
    hasilTugas.userId = hasilTugas.user.id
    hasilTugas.tugas = await tugasRepository.getTugasById(tugasId)
    hasilTugas.tugasId = hasilTugas.tugas.id
    hasilTugas.linkHasil = linkHasil
    const newHasilTugas = await hasilTugasRepository.createTugas(hasilTugas)
    return newHasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateAbsen = async (req: Request): Promise<HasilTugas> => {
  try {
    const hasilTugas = await hasilTugasRepository.updateTugas(req.params.id, req.body)
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteAbsen = async (req: Request): Promise<DeleteResult> => {
  try {
    const hasilTugas = await hasilTugasRepository.deleteTugas(req.params.id)
    return hasilTugas
  } catch (err) {
    throw TypeError(err)
  }
}
