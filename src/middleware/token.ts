import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { getUserById } from '../repositories/userRepository'

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers.authorization
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    jwt.verify(bearerToken, process.env.JWT_SECRET, async (err, authData) => {
      if (err) {
        return res.status(403).send(err.toString())
      }
      next()
    })
  } else {
    return res.sendStatus(403)
  }
}

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerHeader = req.headers.authorization
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ')
      const bearerToken = bearer[1]
      jwt.verify(bearerToken, process.env.JWT_SECRET, async (err, authData) => {
        if (err) {
          return res.status(403).send(err.toString())
        }
        if (authData.admin) {
          next()
        } else {
          return res.sendStatus(403)
        }
      })
    } else {
      return res.sendStatus(403)
    }
  } catch (err) {
    return res.status(400).send(err.toString())
  }
}
