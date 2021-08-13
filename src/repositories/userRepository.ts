import { UserTypes } from "../models/UserTypes";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import moment from "moment";
import { RoleDashboardItems } from "../models/RoleDashboardItems";
import { Role } from "../models/Role";
import { RoleDashboard } from "../models/RoleDashboard";
import { EmployeeRole } from "../models/EmployeeRole";
import { pick } from "lodash";
import { RolePermission } from "../models/RolePermission";

export const getAllUser = async (): Promise<User[]> => {
  try {
    const allUser = await getRepository(User)
      .createQueryBuilder("user")
      .limit(10)
      .getMany();
    return allUser;
  } catch (err) {
    throw TypeError(err);
  }
};

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder("user")
      .where("user_email = :email", { email })
      .getOne();
    return user;
  } catch (err) {
    throw TypeError(err);
  }
};

export const getUserByGoogleId = async (google_id: string): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder("user")
      .where("google_id = :google_id", { google_id })
      .getOne();
    return user;
  } catch (err) {
    throw TypeError(err);
  }
};

export const getUserWithRoleByGoogleId = async (google_id: string): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndMapOne("user.user_type", UserTypes, "user_types", "user.user_type=user_types.user_types_id")
      .where("google_id = :google_id", { google_id })
      .getOne();
    return user;
  } catch (err) {
    throw TypeError(err);
  }
};


export const getUserWithRoleByEmail = async (email: string): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndMapOne("user.user_type", UserTypes, "user_types", "user.user_type=user_types.user_types_id")
      .where("user_email = :email", { email })
      .getOne();
    return user;
  } catch (err) {
    throw TypeError(err);
  }
};

export const updateUserLoggedAt = async (user_id: string): Promise<any|void> => {
  try {
    await getRepository(User)
      .createQueryBuilder()
      .update(User)
      .set({loggedAt:moment(new Date()).format("YYYY-MM-DD")})
      .where("user_id = :user_id", { user_id })
      .execute()
  } catch (err) {
    throw TypeError(err);
  }
};


export const getUserDashboard = async (roles:EmployeeRole[]): Promise<any|void> => {
  const role_ids = roles.map(role => role.rolePermissionId);
  try {
    const roleRawDashboard = await getRepository(RoleDashboardItems)
      .createQueryBuilder("role_dashboard_items")
      .select(['role_dashboard_items.dashboard_name','role_dashboard_items.dashboard_type'])
      .innerJoin(RoleDashboard, "role_dashboard", "role_dashboard_items.dashboard_item_id=role_dashboard.dashboard_item_id")
      .innerJoin(Role ,"role", "role.role_id=role_dashboard.role_id")
      .where("role.role_id IN(:...role_ids)", {role_ids})
      .groupBy("dashboard_name")
      .getRawMany();
    const roleDashboard = roleRawDashboard.map(role=>pick(role,["dashboard_name","dashboard_type"])) 
    return roleDashboard;
  } catch (err) {
    throw TypeError(err);
  }
}

export const getEmployeeSubRole = async (roles:EmployeeRole[]): Promise<any|void> => {
  const role_ids = roles.map(role => role.rolePermissionId);
  try {
    const roleRawDashboard = await getRepository(RolePermission)
  } catch (err) {
    throw TypeError(err);
  }
}
