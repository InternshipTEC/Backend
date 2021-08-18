import { Employee } from '../models/Employee'
import { getRepository } from 'typeorm'

export const getEmployeeById = async (employeeId: string): Promise<Employee> => {
  try {
    const employee = await getRepository(Employee)
      .createQueryBuilder('employee')
      .where('employee_id = :employeeId', { employeeId })
      .getOne()
    return employee
  } catch (err) {
    throw TypeError(err)
  }
}
