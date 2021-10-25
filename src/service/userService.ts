import * as userRepository from '../repositories/userRepository'
import * as fypProfileRepository from '../repositories/fypProfileRepository'
import * as eventRepository from '../repositories/eventRepository'
import * as bcrypt from 'bcrypt'
import { User } from '../models/User'
import { DeleteResult } from 'typeorm'
import { Request } from 'express'
import { FypProfile, toEnumUserRole } from '../models/FypProfile'

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

export const getUserWithFypProfile = async (req: Request): Promise<User> => {
  try {
    const user = await userRepository.getUserWithFypProfile(req.params.id)
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllUser = async (): Promise<User[]> => {
  try {
    let users = await userRepository.getAllUser()
    const [_, count] = await eventRepository.getAllEvent()
    users = users.map((user: any) => ({ ...user, absenPercentage: (user.absenPercentage / count) * 100 }))
    return users
  } catch (err) {
    throw TypeError(err)
  }
}

export const createUser = async (req: Request): Promise<User> => {
  const { nim, name, password, email, fakultas } = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = new User()
    user.name = name
    user.fakultas = fakultas
    user.password = hashedPassword
    user.email = email
    user.nim = nim
    const newUser = await userRepository.createUser(user)
    return newUser
  } catch (err) {
    throw TypeError(err)
  }
}

// without any instanciation of any other class
export const updateUser = async (req: Request): Promise<User> => {
  try {
    let user
    user = await userRepository.updateUser(req.params.id, {
      ...req.body,
    })
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateUserFypProfile = async (req: Request): Promise<User> => {
  const { role, desc, photoUrl } = req.body
  try {
    let fypProfile = new FypProfile();
    fypProfile.role = toEnumUserRole(role)
    fypProfile.photoUrl = photoUrl
    fypProfile.desc = desc
    await fypProfileRepository.createFypProfile(fypProfile)
    let user = await userRepository.getUserById(req.params.id);
    user.fypProfile = fypProfile
    const newUser = await userRepository.updateUser(req.params.id, user)
    return newUser
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
