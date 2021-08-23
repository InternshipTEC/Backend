import { Request, Response } from 'express'
import * as emailService from '../service/emailService'

export const notifyFriends = async (req: Request, res: Response) => {
  try {
    const result = await emailService.handleNotifyFriends(req)
    return res.status(200).json({
      msg: 'Notify success',
      data: result,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}