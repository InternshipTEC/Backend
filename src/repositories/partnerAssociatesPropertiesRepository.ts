import { PartnerRole } from '../models/PartnerRole'
import { getRepository } from 'typeorm'
import { PartnerAssociatesProperties } from '../models/PartnerAssociatesProperties'

export const getPartnerRoleByPartnerId = async (partnerId: string): Promise<PartnerAssociatesProperties[]> => {
  try {
    const partnerRoles = await getRepository(PartnerAssociatesProperties)
      .createQueryBuilder('partner_associates_properties')
      .select('property_id')
      .where('partner_id = :partnerId', { partnerId })
      .getRawMany()
    return partnerRoles
  } catch (err) {
    throw TypeError(err)
  }
}
