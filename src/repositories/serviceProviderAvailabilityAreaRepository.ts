import { getRepository } from 'typeorm'
import { ServiceProviderAvailabilityArea } from '../models/ServiceProviderAvailabilityArea'

export const getAreaAvaliability = async (serviceProviderId : string): Promise<ServiceProviderAvailabilityArea[]> => {
  try {
    const employeeRoles = await getRepository(ServiceProviderAvailabilityArea)
      .createQueryBuilder('service_provider_availability_area')
      .where('service_provider_id = :serviceProviderId', { serviceProviderId })
      .andWhere('is_active = 1')
      .getMany()
    return employeeRoles
  } catch (err) {
    throw TypeError(err)
  }
}