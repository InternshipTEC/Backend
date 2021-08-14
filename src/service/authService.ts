import * as bcrypt from 'bcrypt'
import { Request, response } from 'express'
import * as jwt from 'jsonwebtoken'
import * as userRepository from '../repositories/userRepository'
import * as employeeRoleRepository from '../repositories/employeeRoleRepository'

const handleLogin = async (req: Request) => {
  const data = req.body
  let user
  let responsePayload = {}
  try {
    if (data.type === 'normal') {
      user = await userRepository.getUserWithRoleByEmail(data.email)
    } else {
      user = await userRepository.getUserWithRoleByGoogleId(data.googleId)
    }
    responsePayload = { ...responsePayload, ...user }

    const token = generateAccessToken(user.userId)
    if (token) {
      if ((user.userPassword === null || user.userPassword === '') && user.googleId) {
        throw new Error('Please sign-in with google!')
      }
      if (!user.status) {
        throw new Error('Your account has been deactivated!')
      }
      if (user.employeeId && user.employeeId !== '') {
        await userRepository.updateUserLoggedAt(user.userId)
        const employeeRoles = await employeeRoleRepository.getEmployeeRoleByEmployeeId(user.employeeId)
        const userDashboard = await userRepository.getUserDashboard(employeeRoles)
        const permissions = await userRepository.getEmployeeSubRole(employeeRoles)
        if (permissions) {
          responsePayload = {
            ...responsePayload,
            permissions,
            dashboard: userDashboard || [],
          }
          return responsePayload
        }
        if (data.platform === 'mobile') {
          const allowedModule = userRepository.getAllowedModules(employeeRoles)
        }
      }
    }

    return {
      user,
      token,
    }
  } catch (err) {
    throw err
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

const generateAccessToken = (userId: string): string => {
  return jwt.sign(userId, process.env.JWT_SECRET)
}

export { handleLogin, checkPassword, generateAccessToken }
