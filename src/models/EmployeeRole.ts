import { Column, Entity } from 'typeorm'

@Entity('employee_role', { schema: 'bukitvista_dev' })
export class EmployeeRole {
  @Column('varchar', { primary: true, name: 'employee_role_id', length: 24 })
  employeeRoleId: string

  @Column('varchar', { name: 'employee_id', length: 45 })
  employeeId: string

  @Column('varchar', { name: 'role_permission_id', length: 24 })
  rolePermissionId: string

  @Column('tinyint', { name: 'employee_career_id', nullable: true })
  employeeCareerId: number | null

  @Column('tinyint', { name: 'employee_job_title_id', nullable: true })
  employeeJobTitleId: number | null
}
