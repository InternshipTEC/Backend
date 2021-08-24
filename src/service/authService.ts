import * as bcrypt from 'bcrypt'
import { Request } from 'express'
import * as jwt from 'jsonwebtoken'
import * as userService from '../service/userService'
import * as userRepository from '../repositories/userRepository'
import { User } from '../models/User'

const handleLogin = async (req: Request) => {
  let user
  let passwordEncrypted
  try {
    user = await userRepository.getUserByEmail(req.body.email)
  } catch (err) {
    throw TypeError(err)
  }

  try {
    passwordEncrypted = await checkPassword(req.body.password, user.password.toString())
    const accessToken = generateAccessToken(user)
    return { user, accessToken }
  } catch (err) {
    throw TypeError(err)
  }
}

const handleSignup = async (req: Request) => {
  try {
    const user = await userService.createUser(req)
    const accessToken = generateAccessToken(user)
    return { user, accessToken }
  } catch (err) {
    throw TypeError(err)
  }
}

const checkPassword = async (userPassword: string, reqPassword: string): Promise<boolean> => {
  try {
    const encryptResult = await bcrypt.compare(userPassword, reqPassword)
    return encryptResult
  } catch (err) {
    throw TypeError(err)
  }
}

const generateAccessToken = (user: User): string => {
  const jwtPayload = {...user}
  delete jwtPayload.password
  return jwt.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn:60*60*24*2
  })
}

export { handleLogin, handleSignup, checkPassword, generateAccessToken }
