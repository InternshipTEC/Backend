import { pick } from 'lodash'
import moment from 'moment'
import { getRepository } from 'typeorm'
import { MobileAllowedModules } from '../models/MobileAllowedModules'
import { MobileView } from '../models/MobileView'
import { Role } from '../models/Role'
import { RoleDashboard } from '../models/RoleDashboard'
import { RoleDashboardItems } from '../models/RoleDashboardItems'
import { RolePermission } from '../models/RolePermission'
import { User } from '../models/User'
import { UserTypes } from '../models/UserTypes'

export const getAllUser = async (): Promise<User[]> => {
  try {
    const allUser = await getRepository(User)
      .createQueryBuilder('user')
      .limit(10)
      .getMany()
    return allUser
  } catch (err) {
    throw TypeError(err)
  }
}

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder('user')
      .where('user_email = :email', { email })
      .getOne()
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export const getUserByGoogleId = async (googleId: string): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder('user')
      .where('google_id = :googleId', { googleId })
      .getOne()
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export const getUserWithRoleByGoogleId = async (googleId: string): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndMapOne('user.user_type', UserTypes, 'user_types', 'user.user_type=user_types.user_types_id')
      .where('google_id = :googleId', { googleId })
      .getOne()
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export const getUserWithRoleByEmail = async (email: string): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndMapOne('user.user_type', UserTypes, 'user_types', 'user.user_type=user_types.user_types_id')
      .where('user_email = :email', { email })
      .getOne()
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateUserLoggedAt = async (userId: string): Promise<any | void> => {
  try {
    await getRepository(User)
      .createQueryBuilder()
      .update(User)
      .set({ loggedAt: moment(new Date()).format('YYYY-MM-DD') })
      .where('user_id = :userId', { userId })
      .execute()
  } catch (err) {
    throw TypeError(err)
  }
}

export const getUserDashboard = async (roles: any[]): Promise<any | void> => {
  const roleIds = roles.map(role => role.rolePermissionId)
  try {
    const roleRawDashboard = await getRepository(RoleDashboardItems)
      .createQueryBuilder('role_dashboard_items')
      .select(['role_dashboard_items.dashboard_name', 'role_dashboard_items.dashboard_type'])
      .innerJoin(RoleDashboard, 'role_dashboard', 'role_dashboard_items.dashboard_item_id=role_dashboard.dashboard_item_id')
      .innerJoin(Role, 'role', 'role.role_id=role_dashboard.role_id')
      .where('role.role_id IN(:...roleIds)', { roleIds })
      .groupBy('dashboard_name')
      .getRawMany()
    const roleDashboard = roleRawDashboard.map(role => pick(role, ['dashboard_name', 'dashboard_type']))
    return roleDashboard
  } catch (err) {
    throw TypeError(err)
  }
}

export const getSubRole = async (roles: any[]): Promise<any | void> => {
  const roleIds = roles.map(role => role.rolePermissionId)
  try {
    const rawRolePermission = await getRepository(RolePermission)
      .createQueryBuilder('role_permission')
      .select('permission_id')
      .where('role_permission_id IN(:...roleIds)', { roleIds })
      .groupBy('permission_id')
      .getRawMany()
    const rolePermission = rawRolePermission.map(role => role.permission_id)
    return rolePermission
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllowedModules = async (roles: any[]): Promise<any | void> => {
  const roleIds = roles.map(role => role.rolePermissionId)
  try {
    const rawRolePermission = await getRepository(MobileAllowedModules)
      .createQueryBuilder('mobile_allowed_modules')
      .leftJoinAndMapMany('mobile_allowed_modules.view', MobileView, 'mobile_view', 'mobile_allowed_modules.view=mobile_view.view_name')
      .where('mobile_allowed_modules.role_id IN(:...roleIds)', { roleIds })
      .getMany()
    return rawRolePermission
  } catch (err) {
    throw TypeError(err)
  }
}
