import { ServiceProviderRole } from '../models/ServiceProviderRole'
import { getRepository } from 'typeorm'
import { ServiceProviderRoleServices } from '../models/ServiceProviderRoleServices'

export const getServiceProviderRoleById = async (serviceProviderRoleId: string): Promise<ServiceProviderRoleServices[]> => {
  try {
    const serviceProviderRoleService = await getRepository(ServiceProviderRoleServices)
      .createQueryBuilder('service_provider_role_services')
      .select('service_provider_role_service_id')
      .where('service_provider_role_id = :serviceProviderRoleId', { serviceProviderRoleId })
      .andWhere('is_active = 1')
      .getRawMany()
    return serviceProviderRoleService
  } catch (err) {
    throw TypeError(err)
  }
}
