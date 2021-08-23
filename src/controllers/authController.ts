import { Request, Response } from "express";
import * as authService from "../service/authService";

const login = async (req: Request, res: Response) => {
  try {
    const loginResult = await authService.handleLogin(req);
    return res.status(200).json({
      msg: 'Login Success',
      data: loginResult,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
};

const signup = async (req: Request, res: Response) => {
  try {
    const signUpResult = await authService.handleSignup(req);
    return res.status(200).json({
      msg: 'Signup Success',
      data: signUpResult,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
};

export default { login, signup };
