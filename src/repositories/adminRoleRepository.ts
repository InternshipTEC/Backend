import { AdminRole } from '../models/AdminRole'
import { getRepository } from 'typeorm'

export const getAdminRoleByAdminId = async (adminId: string): Promise<AdminRole[]> => {
  try {
    const partnerRoles = await getRepository(AdminRole)
      .createQueryBuilder('admin_role')
      .where('admin_id = :adminId', { adminId })
      .getMany()
    return partnerRoles
  } catch (err) {
    throw TypeError(err)
  }
}