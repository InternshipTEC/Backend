import { Request, Response } from 'express'
import * as fypProfileService from '../service/fypProfileService'

export const getFypProfile = async (req: Request, res: Response) => {
  try {
    const fypProfile = await fypProfileService.getFypProfileById(req)
    return res.status(200).json({
      msg: 'get fypProfile success',
      data: fypProfile,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllFypProfile = async (req: Request, res: Response) => {
  try {
    const fypProfile = await fypProfileService.getAllFypProfile()
    return res
      .status(200)
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${fypProfile.length}`)
      .send(fypProfile)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const updateFypProfile = async (req: Request, res: Response) => {
  try {
    const fypProfile = await fypProfileService.updateFypProfile(req)
    return res.status(200).json({
      msg: 'update fypProfile success',
      data: fypProfile,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const deleteFypProfile = async (req: Request, res: Response) => {
  try {
    const fypProfile = await fypProfileService.deleteFypProfile(req)
    return res.status(200).json({
      msg: 'delete fypProfile success',
      data: fypProfile,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}
