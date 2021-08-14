import { Column, Entity, OneToMany } from 'typeorm'
import { Employee } from './Employee'

@Entity('employee_status', { schema: 'bukitvista_dev' })
export class EmployeeStatus {
  @Column('int', { primary: true, name: 'status_code' })
  statusCode: number

  @Column('varchar', { name: 'status_description', length: 50 })
  statusDescription: string

  @OneToMany(
    () => Employee,
    employee => employee.employeeStatus2,
  )
  employees: Employee[]
}
