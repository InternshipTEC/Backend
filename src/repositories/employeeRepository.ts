import { getRepository } from "typeorm";
import { Employee } from "../models/Employee";

export const getEmployeeById = async (employee_id: string): Promise<Employee> => {
  try {
    const user = await getRepository(Employee)
      .createQueryBuilder("employee")
      .where("employee_id = :employee_id", { employee_id })
      .getOne();
    return user;
  } catch (err) {
    throw TypeError(err);
  }
};

