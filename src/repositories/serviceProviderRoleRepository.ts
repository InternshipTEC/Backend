import { ServiceProviderRole } from '../models/ServiceProviderRole'
import { getRepository } from 'typeorm'

export const getServiceProviderRoleById = async (serviceProviderId : string): Promise<ServiceProviderRole[]> => {
  try {
    const employeeRoles = await getRepository(ServiceProviderRole)
      .createQueryBuilder('service_provider_role')
      .where('service_provider_id = :serviceProviderId', { serviceProviderId })
      .andWhere('is_active = 1')
      .getMany()
    return employeeRoles
  } catch (err) {
    throw TypeError(err)
  }
}

