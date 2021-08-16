import * as bcrypt from 'bcrypt'
import { Request } from 'express'
import * as jwt from 'jsonwebtoken'
import * as partnerAssociatesPropertiesRepository from '../repositories/partnerAssociatesPropertiesRepository'
import * as employeeRoleRepository from '../repositories/employeeRoleRepository'
import * as partnerRoleRepository from '../repositories/partnerRoleRepository'
import * as userRepository from '../repositories/userRepository'
import * as serviceProviderRoleRepository from '../repositories/serviceProviderRoleRepository'
import * as serviceProviderRoleServicesRepository from '../repositories/serviceProviderRoleServicesRepository'
import * as serviceProviderAvailabilityAreaRepository from '../repositories/serviceProviderAvailabilityAreaRepository'
import * as adminRoleRepository from '../repositories/adminRoleRepository'

const handleLogin = async (req: Request) => {
  const data = req.body
  let user
  let responsePayload : any = {}
  try {
    if (data.type === 'normal') {
      user = await userRepository.getUserWithRoleByEmail(data.email)
      if ((user.userPassword === null || user.userPassword === '') && user.googleId) {
        throw new Error('Please sign-in with google!')
      }
    } else {
      user = await userRepository.getUserWithRoleByGoogleId(data.googleId)
    }
    responsePayload = { ...responsePayload, ...user }
    console.log(user)

    const token = generateAccessToken(user.userId)
    if (token) {
      if (user.status === 2) {
        throw new Error('Your account has been deactivated!')
      }
      var roles;
      if (user.employeeId) {
        roles = await employeeRoleRepository.getEmployeeRoleByEmployeeId(user.employeeId)
        const userDashboard = await userRepository.getUserDashboard(roles)
        const permissions = await userRepository.getSubRole(roles)
        if (permissions) {
          responsePayload = {
            ...responsePayload,
            permissions,
            dashboard: userDashboard || [],
          }
        }
      } else if (user.partnerId) {
        roles = await partnerRoleRepository.getPartnerRoleByPartnerId(user.partnerId)
        const userDashboard = await userRepository.getUserDashboard(roles)
        const permissions = await userRepository.getSubRole(roles)
        responsePayload = {
          ...responsePayload,
          permissions,
          dashboard: userDashboard || [],
          sub_roles:roles.map(role=>role.rolePermissionId)
        }
        const partnerProperties = await partnerAssociatesPropertiesRepository.getPartnerRoleByPartnerId(user.partnerId)
        responsePayload = {
          ...responsePayload,
          partner_associates:partnerProperties.map(propertyData => propertyData.propertyId)
        }
      } else if (user.serviceProviderId) {
        roles = await serviceProviderRoleRepository.getServiceProviderRoleById(user.serviceProviderId)
        console.log(roles)
        const userDashboard = await userRepository.getUserDashboard(roles)
        console.log(userDashboard)
        const permissions = await userRepository.getSubRole(roles)
        const serviceProviderRoleServices = await serviceProviderRoleServicesRepository.getServiceProviderRoleById(roles[0].serviceProviderRoleId) 
        const areaAvailability = await serviceProviderAvailabilityAreaRepository.getAreaAvaliability(user.serviceProviderId)
      } else {
        if(!user.userType.userTypeName){
          responsePayload.user.role = null
        }
        if(user.userType.userTypeName === "admin") {
          roles = await adminRoleRepository.getAdminRoleByAdminId(user.serviceProviderId)
          const permissions = await userRepository.getSubRole(roles)
        } else {
          responsePayload.sub_role = []
          responsePayload.permission = []
        }
      } 

      if (data.platform === 'mobile') {
        const allowedModules = userRepository.getAllowedModules(roles)
        responsePayload = {
          ...responsePayload,
          allowedModules
        }
      }
    }
    await userRepository.updateUserLoggedAt(user.userId)
    return responsePayload
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
