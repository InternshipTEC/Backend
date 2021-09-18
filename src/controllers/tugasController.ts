import { Request, Response } from 'express'
import * as tugasController from '../service/tugasService'

export const getTugas = async (req: Request, res: Response) => {
  try {
    const tugas = await tugasController.getTugasById(req)
    return res.status(200).json({
      msg: 'get tugas success',
      data: tugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllTugas = async (req: Request, res: Response) => {
  try {
    const tugas = await tugasController.getAllTugas(req)
    return res
      .status(200)
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${tugas.length}`)
      .send(tugas)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllOccuringTugas = async (req: Request, res: Response) => {
  try {
    const tugas = await tugasController.getAllOccuringTugas()
    return res.status(200).json({
      msg: 'get tugas success',
      data: tugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const createTugas = async (req: Request, res: Response) => {
  try {
    const tugas = await tugasController.createTugas(req)
    return res.status(200).json({
      msg: 'create tugas success',
      data: tugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const updateTugas = async (req: Request, res: Response) => {
  try {
    const tugas = await tugasController.updateTugas(req)
    return res.status(200).json({
      msg: 'update tugas success',
      data: tugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const deleteTugas = async (req: Request, res: Response) => {
  try {
    const tugas = await tugasController.deleteTugas(req)
    return res.status(200).json({
      msg: 'delete tugas success',
      data: tugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}
