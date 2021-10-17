import { Request } from 'express'
import { DeleteResult } from 'typeorm'
import { Materi } from '../models/Materi'
import * as materiRepository from '../repositories/materiRepository'

export const getMateriById = async (req: Request): Promise<any> => {
  try {
    const event = await materiRepository.getMateriById(req.params.id)
    return event
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllMateri = async (): Promise<Materi[]> => {
  try {
    const [materi, _] = await materiRepository.getAllMateri()
    return materi
  } catch (err) {
    throw TypeError(err)
  }
}

export const createMateri = async (req: Request): Promise<Materi> => {
  const { link, judul, deskripsi } = req.body
  try {
    const materi = new Materi()
    materi.link = link
    materi.judul = judul
    materi.deskripsi = deskripsi
    const newMateri = await materiRepository.createMateri(materi)
    return newMateri
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateMateri = async (req: Request): Promise<Materi> => {
  try {
    const materi = await materiRepository.updateMateri(req.params.id, req.body)
    return materi
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteMateri = async (req: Request): Promise<DeleteResult> => {
  try {
    const result = await materiRepository.deleteMateri(req.params.id)
    return result
  } catch (err) {
    throw TypeError(err)
  }
}
