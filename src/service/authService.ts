import * as bcrypt from "bcrypt";
import { Request, response } from "express";
import * as jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository";
import * as employeeRoleRepository from "../repositories/employeeRoleRepository";

const handleLogin = async (req: Request) => {
  const data = req.body;
  var user;
  var response_payload = {};
  try{
    if(data.type === "normal") {
      user =  await userRepository.getUserWithRoleByEmail(data.email);
    } else {
      user = await userRepository.getUserWithRoleByGoogleId(data.googleId);
    }
    response_payload = {...response_payload, ...user}
    
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
        const employee_roles = await employeeRoleRepository.getEmployeeRoleByEmployeeId(user.employeeId)
        const user_dashboard = await userRepository.getUserDashboard(employee_roles)
        response_payload = {...response_payload, dashboard:user_dashboard||[]}
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
