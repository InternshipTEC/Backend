import { Request, Response } from 'express'
import * as hasilTugasService from '../service/hasilTugasService'

export const getHasilTugas = async (req: Request, res: Response) => {
  try {
    const hasilTugas = await hasilTugasService.getHasilTugasById(req)
    return res.status(200).json({
      msg: 'get hasilTugas success',
      data: hasilTugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getHasilTugasByUserId = async (req: Request, res: Response) => {
  try {
    const hasilTugas = await hasilTugasService.getHasilTugasByUserId(req)
    return res.status(200).json({
      msg: 'get hasilTugas success',
      data: hasilTugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getHasilTugasByEventId = async (req: Request, res: Response) => {
  try {
    const hasilTugas = await hasilTugasService.getHasilTugasByTugasId(req)
    return res.status(200).json({
      msg: 'get hasilTugas success',
      data: hasilTugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllHasilTugas = async (req: Request, res: Response) => {
  try {
    const hasilTugass = await hasilTugasService.getAllHasilTugas()
    return res
      .status(200)
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${hasilTugass.length}`)
      .send(hasilTugass)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const createHasilTugas = async (req: Request, res: Response) => {
  try {
    const hasilTugas = await hasilTugasService.createHasilTugas(req)
    return res.status(200).json({
      msg: 'create hasilTugas success',
      data: hasilTugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const updateHasilTugas = async (req: Request, res: Response) => {
  try {
    const hasilTugas = await hasilTugasService.updateHasilTugas(req)
    return res.status(200).json({
      msg: 'update hasilTugas success',
      data: hasilTugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const deleteHasilTugas = async (req: Request, res: Response) => {
  try {
    const hasilTugas = await hasilTugasService.deleteHasilTugas(req)
    return res.status(200).json({
      msg: 'delete hasilTugas success',
      data: hasilTugas,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}
