import { Request, Response } from 'express'
import * as userService from '../service/userService'

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}

const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUser()
    return res.status(200).json(users)
  } catch (err) {
    return res.status(400).json(err)
  }
}

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.deleteUser(req)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export default { getUser, createUser, getAllUser, updateUser, deleteUser }
