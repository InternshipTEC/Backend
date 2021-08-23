import * as bcrypt from "bcrypt";
import { Request } from "express";
import * as jwt from "jsonwebtoken";
import * as userService from "../service/userService";
import * as userRepository from "../repositories/userRepository";

const handleLogin = async (req: Request) => {
  let user;
  let passwordEncrypted;
  try {
    user = await userRepository.getUserByEmail(req.body.email);
  } catch (err) {
    throw TypeError(err);
  }

  try {
    passwordEncrypted = await checkPassword(
      req.body.password,
      user.password.toString()
    );
    const accessToken = generateAccessToken(user.id);
    return { user, accessToken };
  } catch (err) {
    throw TypeError(err);
  }
};

const handleSignup = async (req: Request) => {
  try {
    const user = await userService.createUser(req);
    const accessToken = generateAccessToken(user.id);
    return { user, accessToken };
  } catch (err) {
    throw TypeError(err);
  }
};

const checkPassword = async (
  userPassword: string,
  reqPassword: string
): Promise<boolean> => {
  try {
    const encryptResult = await bcrypt.compare(userPassword, reqPassword);
    return encryptResult;
  } catch (err) {
    throw TypeError(err);
  }
};

const generateAccessToken = (userId: string): string => {
  return jwt.sign(userId, process.env.JWT_SECRET);
};

export { handleLogin, handleSignup, checkPassword, generateAccessToken };
