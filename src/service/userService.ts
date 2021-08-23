import * as userRepository from '../repositories/userRepository'
import * as bcrypt from 'bcrypt'
import { User } from '../models/User'
import { DeleteResult } from 'typeorm'
import { Request } from 'express'

export const getUserByEmail = async (req: Request): Promise<User> => {
  try {
    const user = await userRepository.getUserByEmail(req.body.email)
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export const getUserById = async (req: Request): Promise<User> => {
  try {
    const user = await userRepository.getUserById(req.params.id)
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllUser = async (): Promise<User[]> => {
  try {
    const users = await userRepository.getAllUser()
    return users
  } catch (err) {
    throw TypeError(err)
  }
}

export const createUser = async (req: Request): Promise<User> => {
  const { nim, name, password, email } = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = new User()
    user.name = name
    user.password = hashedPassword
    user.email = email
    user.nim = nim
    const newUser = await userRepository.createUser(user)
    return newUser
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateUser = async (req: Request): Promise<User> => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    let user
    if (hashedPassword) {
      user = await userRepository.updateUser(req.params.id, {
        ...req.body,
        password: hashedPassword,
      })
      return user
    }
    throw TypeError("Password doesn't match!")
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteUser = async (req: Request): Promise<DeleteResult> => {
  try {
    const result = await userRepository.deleteUser(req.params.id)
    return result
  } catch (err) {
    throw TypeError(err)
  }
}
