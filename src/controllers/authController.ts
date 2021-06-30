import { Request, Response } from 'express'
import * as authService from '../service/authService'

const login = async (req: Request, res: Response) => {
  try {
    const loginResult = await authService.handleLogin(req);
    return res.status(200).json(loginResult);
  } catch (err) {
    return res.status(400).json(err);
  }
  
}

const signup = async (req: Request, res: Response) => {
  try {
    const signUpResult = await authService.handleSignup(req);
    return res.status(200).json(signUpResult); 
  } catch (err) {
    return res.status(400).json(err);
  }
}

export default { login, signup }
