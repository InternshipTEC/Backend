import { Request, Response } from 'express'
import * as userService from '../service/userService'
import * as authService from '../service/authService'

const login = async (req: Request, res: Response) => {
  let user, passwordEncrypted;
  try {
    user = await userService.getUserById(req.params.id);
  } catch (err) {
    return res.status(400).json(err);
  }

  try {
    passwordEncrypted = await authService.checkPassword(req.body.password, user.password.toString())
    const accessToken = authService.generateAccessToken(user);
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err);
  }
}

const signup = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    const accessToken = authService.generateAccessToken(user);
    return res.status(200).json({user, accessToken});
  } catch (err) {
    return res.status(400).json(err);
  }
}

export default { login, signup }
