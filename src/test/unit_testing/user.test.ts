import { Request } from "express";
import { User } from "../../models/User";
import * as userService from "../../service/userService";

jest.mock("../../repositories/userRepository", () => {
  const mockUser = new User();
  return {
    getUserById: async (id: string) => Promise.resolve(mockUser),
    getUserByEmail: async (email: string) => Promise.resolve(mockUser),
    getAllUser: async () => Promise.resolve([mockUser]),
    createUser: async (user: User) => Promise.resolve(mockUser),
    updateUser: async (id: string, user: User) => Promise.resolve(mockUser),
    deleteUser: async () => Promise.resolve(mockUser)
  };
});

describe("getAllUser function", () => {
  test("Return an object", async () => {
    const response = await userService.getAllUser();
    expect(response).toBeTruthy();
  });
});
