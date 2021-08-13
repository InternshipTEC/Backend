import { getRepository } from "typeorm";
import { EmployeeRole } from "../models/EmployeeRole";

export const getEmployeeRoleByEmployeeId = async (employee_id: string): Promise<EmployeeRole[]> => {
  try {
    const employee_roles = await getRepository(EmployeeRole)
      .createQueryBuilder("employee_role")
      .where("employee_id = :employee_id", { employee_id })
      .getMany();
      console.log(employee_roles)
    return employee_roles;
  } catch (err) {
    throw TypeError(err);
  }
};

