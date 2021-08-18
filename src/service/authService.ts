import * as bcrypt from 'bcrypt'
import { Request } from 'express'
import { decamelizeKeys } from 'humps'
import * as jwt from 'jsonwebtoken'
import { groupBy, pick } from 'lodash'
import * as adminRoleRepository from '../repositories/adminRoleRepository'
import * as employeeRepository from '../repositories/employeeRepository'
import * as employeeRoleRepository from '../repositories/employeeRoleRepository'
import * as partnerAssociatesPropertiesRepository from '../repositories/partnerAssociatesPropertiesRepository'
import * as partnerRepository from '../repositories/partnerRepository'
import * as partnerRoleRepository from '../repositories/partnerRoleRepository'
import * as serviceProviderAvailabilityAreaRepository from '../repositories/serviceProviderAvailabilityAreaRepository'
import * as serviceProviderRepository from '../repositories/serviceProviderRepository'
import * as serviceProviderRoleRepository from '../repositories/serviceProviderRoleRepository'
import * as serviceProviderRoleServicesRepository from '../repositories/serviceProviderRoleServicesRepository'
import * as userRepository from '../repositories/userRepository'

const handleLogin = async (req: Request) => {
  const data = req.body
  let user
  let responsePayload: any = {}
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
    responsePayload = {
      ...responsePayload,
      user_type: responsePayload.user_type.userTypesId,
    }

    const token = generateAccessToken(user.userId)
    if (token) {
      if (user.status === 2) {
        throw new Error('Your account has been deactivated!')
      }
      let roles: any
      if (user.employeeId) {
        roles = await employeeRoleRepository.getEmployeeRoleByEmployeeId(user.employeeId)
        const employee = await employeeRepository.getEmployeeById(user.employeeId)
        responsePayload = {
          ...responsePayload,
          employee,
          role: 'employee',
        }
      } else if (user.partnerId) {
        roles = await partnerRoleRepository.getPartnerRoleByPartnerId(user.partnerId)
        const partner = await partnerRepository.getPartnerById(user.partnerId)
        const partnerProperties = await partnerAssociatesPropertiesRepository.getPartnerRoleByPartnerId(user.partnerId)
        responsePayload = {
          ...responsePayload,
          partner,
          role: 'partner',
          partner_associates: partnerProperties.map(propertyData => propertyData.propertyId),
        }
      } else if (user.serviceProviderId) {
        roles = await serviceProviderRoleRepository.getServiceProviderRoleById(user.serviceProviderId)
        const serviceProvider = await serviceProviderRepository.getServiceProviderId(user.serviceProviderId)
        const serviceProviderRoleServices = await serviceProviderRoleServicesRepository.getServiceProviderRoleById(roles[0].serviceProviderRoleId)
        const areaAvailability = await serviceProviderAvailabilityAreaRepository.getAreaAvaliability(user.serviceProviderId)
        responsePayload = {
          ...responsePayload,
          role: 'service_provider',
          service_provider: serviceProvider,
          servide_provider_role_services: serviceProviderRoleServices.map(
            serviceProviderRoleService => serviceProviderRoleService.serviceProviderRoleServiceId,
          ),
          area_availability: areaAvailability.map(area => area.areaId),
        }
      } else {
        if (!user.userType.userTypeName) {
          responsePayload.user.role = null
        }
        if (user.userType.userTypeName === 'admin') {
          roles = await adminRoleRepository.getAdminRoleByAdminId(user.serviceProviderId)
          responsePayload = {
            ...responsePayload,
            role: 'admin',
            admin: {},
          }
        } else {
          responsePayload.sub_role = []
          responsePayload.permission = []
        }
      }
      const userDashboard = await userRepository.getUserDashboard(roles)
      const permissions = await userRepository.getSubRole(roles)

      responsePayload = {
        ...responsePayload,
        token,
        permissions,
        dashboards: userDashboard,
        subroles: roles.map((role: any) => role.rolePermissionId),
      }
      delete responsePayload.userPassword

      responsePayload = decamelizeKeys(responsePayload)
      // allowedModule not decamelized in v1
      if (data.platform === 'mobile') {
        const allowedModules = await userRepository.getAllowedModules(roles)
        const allowedModulesGroupedByView = groupBy(allowedModules, 'view')
        const modules = []
        for (const i in allowedModulesGroupedByView) {
          if (allowedModulesGroupedByView.hasOwnProperty(i)) {
            modules.push({
              view: i,
              navigationItem: !!allowedModulesGroupedByView[i].map((v: any) => v.navigationItem)[0],
              modules: allowedModulesGroupedByView[i].map((v: any) => pick(v, ['position', 'module'])),
            })
          }
        }
        responsePayload = {
          ...responsePayload,
          allowedModules: modules,
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
