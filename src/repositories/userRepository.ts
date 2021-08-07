import { getRepository } from "typeorm";
import { User } from "../models/User";

const getAllUser = async (): Promise<User[]> => {
  try {
    const allUser = await getRepository(User)
      .createQueryBuilder("user")
      .getMany();
    return allUser;
  } catch (err) {
    throw TypeError(err);
  }
};

export { getAllUser };
