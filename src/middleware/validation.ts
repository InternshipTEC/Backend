import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import * as userRepository from '../repositories/userRepository'

export const requestValidator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

export const setContentRange = (req: Request, res: Response, next: NextFunction) => {
  res.set('Access-Control-Expose-Headers','Content-Range')
  res.set('Content-Range', `posts 0-1/${[1,2,3].length}`)
  next()
}