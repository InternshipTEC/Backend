import { getRepository } from 'typeorm'
import { EmployeeRole } from '../models/EmployeeRole'

export const getEmployeeRoleByEmployeeId = async (employeeId: string): Promise<EmployeeRole[]> => {
  try {
    const employeeRoles = await getRepository(EmployeeRole)
      .createQueryBuilder('employee_role')
      .where('employee_id = :employeeId', { employeeId })
      .getMany()
    return employeeRoles
  } catch (err) {
    throw TypeError(err)
  }
}
