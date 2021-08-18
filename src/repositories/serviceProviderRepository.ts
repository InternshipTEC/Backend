import { getRepository } from 'typeorm'
import { ServiceProvider } from '../models/ServiceProvider'

export const getServiceProviderId = async (serviceProviderId: string): Promise<ServiceProvider> => {
  try {
    const employee = await getRepository(ServiceProvider)
      .createQueryBuilder('service_provider')
      .where('service_provider_id = :serviceProviderId', { serviceProviderId })
      .getOne()
    return employee
  } catch (err) {
    throw TypeError(err)
  }
}
