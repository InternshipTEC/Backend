import { PartnerRole } from '../models/PartnerRole'
import { getRepository } from 'typeorm'

export const getPartnerRoleByPartnerId = async (partnerId: string): Promise<PartnerRole[]> => {
  try {
    const partnerRoles = await getRepository(PartnerRole)
      .createQueryBuilder('partner_role')
      .where('partner_id = :partnerId', { partnerId })
      .getMany()
    return partnerRoles
  } catch (err) {
    throw TypeError(err)
  }
}