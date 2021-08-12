import * as bcrypt from "bcrypt";
import { Request } from "express";
import * as jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository";

const handleLogin = async (req: Request) => {
  const data = req.body;
  var user;
  try{
    if(data.type === "normal") {
      user =  await userRepository.getUserWithRoleByEmail(data.email);
    } else {
      user = await userRepository.getUserWithRoleByGoogleId(data.googleId);
    }
    
    const token = generateAccessToken(user.userId)
    if(token){
      if((user.userPassword === null || user.userPassword === "") && user.googleId){
        throw "Please sign-in with google!"
      }
      if(!user.status){
        throw "Your account has been deactivated!"
      }
      if(user.employeeId && user.employeeId != ""){
        await userRepository.updateUserLoggedAt(user.userId)
      }
    }
    
    return {
      user,
      token
    };

  } catch(err) {
    throw err
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

export { handleLogin, checkPassword, generateAccessToken };
