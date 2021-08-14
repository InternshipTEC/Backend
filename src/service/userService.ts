import * as userRepository from '../repositories/userRepository'
import { User } from '../models/User'

const getAllUser = async (): Promise<User[]> => {
  try {
    const users = await userRepository.getAllUser()
    return users
  } catch (err) {
    throw err
  }
}

export { getAllUser }
