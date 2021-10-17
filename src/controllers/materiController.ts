import { Request, Response } from 'express'
import * as materiService from '../service/materiService'

export const getMateri = async (req: Request, res: Response) => {
  try {
    const materi = await materiService.getMateriById(req)
    return res.status(200).json({
      msg: 'get materi success',
      data: materi,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllMateri = async (req: Request, res: Response) => {
  try {
    const materi = await materiService.getAllMateri()
    return res
      .status(200)
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${materi.length}`)
      .send(materi)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const createMateri = async (req: Request, res: Response) => {
  try {
    const materi = await materiService.createMateri(req)
    return res.status(200).json({
      msg: 'create materi success',
      data: materi,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const updateMateri = async (req: Request, res: Response) => {
  try {
    const materi = await materiService.updateMateri(req)
    return res.status(200).json({
      msg: 'update materi success',
      data: materi,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const deleteMateri = async (req: Request, res: Response) => {
  try {
    const materi = await materiService.deleteMateri(req)
    return res.status(200).json({
      msg: 'delete materi success',
      data: materi,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}
