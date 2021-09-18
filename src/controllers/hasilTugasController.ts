import { Request, Response } from 'express'
import * as hasilTugasService from '../service/absenService'

export const getAbsen = async (req: Request, res: Response) => {
  try {
    const absen = await hasilTugasService.getAbsenById(req)
    return res.status(200).json({
      msg: 'get absen success',
      data: absen,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAbsenByUserId = async (req: Request, res: Response) => {
  try {
    const absen = await hasilTugasService.getAbsenByUserId(req)
    return res.status(200).json({
      msg: 'get absen success',
      data: absen,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAbsenByEventId = async (req: Request, res: Response) => {
  try {
    const absen = await hasilTugasService.getAbsenByEventId(req)
    return res.status(200).json({
      msg: 'get absen success',
      data: absen,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllAbsen = async (req: Request, res: Response) => {
  try {
    const absens = await hasilTugasService.getAllAbsen()
    return res
      .status(200)
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${absens.length}`)
      .send(absens)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const createAbsen = async (req: Request, res: Response) => {
  try {
    const absen = await hasilTugasService.createAbsen(req)
    return res.status(200).json({
      msg: 'create absen success',
      data: absen,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const updateAbsen = async (req: Request, res: Response) => {
  try {
    const absen = await hasilTugasService.updateAbsen(req)
    return res.status(200).json({
      msg: 'update absen success',
      data: absen,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const deleteAbsen = async (req: Request, res: Response) => {
  try {
    const absen = await hasilTugasService.deleteAbsen(req)
    return res.status(200).json({
      msg: 'delete absen success',
      data: absen,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}
