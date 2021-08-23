import { Request, Response } from 'express'
import * as userService from '../service/userService'

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req)
    return res.status(200).json({
      msg: 'get user success',
      data: user,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUser()
    return res
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${users.length}`)
      .status(200)
      .send(users)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req)
    return res.status(200).json({
      msg: 'create user success',
      data: user,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req)
    return res.status(200).json({
      msg: 'update user success',
      data: user,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.deleteUser(req)
    return res.status(200).json({
      msg: 'delete user success',
      data: user,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export default { getUser, createUser, getAllUser, updateUser, deleteUser }
