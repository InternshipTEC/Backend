import { Partner } from '../models/Partner'
import { getRepository } from 'typeorm'

export const getPartnerById = async (partnerId: string): Promise<Partner> => {
  try {
    const partner = await getRepository(Partner)
      .createQueryBuilder('partner')
      .where('partner_id = :partnerId', { partnerId })
      .getOne()
    return partner
  } catch (err) {
    throw TypeError(err)
  }
}
