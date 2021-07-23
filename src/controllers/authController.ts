import { Request, Response, Router } from 'express'
import * as authService from '../service/authService'

const login = async (req: Request, res: Response) => {
  /* 	#swagger.tags = ['Auth']
      #swagger.description = 'Endpoint to log in a specific user' */

  /*	#swagger.parameters['obj'] = {
      in: 'body',
      description: 'Login request',
      required: true,
      schema: { $ref: "#/definitions/loginRequest" }
  } */

  /* #swagger.responses[200] = {
            description: "Login response",
            schema: { $ref: "#/definitions/loginResponse" },
  } */
  try {
    const loginResult = await authService.handleLogin(req)
    return res.status(200).json(loginResult)
  } catch (err) {
    return res.status(400).json(err)
  }
}

const signup = async (req: Request, res: Response) => {
  /* 	#swagger.tags = ['Auth']
      #swagger.description = 'Endpoint to sign in a specific user' */

  /*	#swagger.parameters['obj'] = {
      in: 'body',
      description: 'Signup request',
      required: true,
      schema: { $ref: "#/definitions/signUpRequest" }
  } */

  /* #swagger.responses[200] = {
            description: "Get user response",
            schema: { $ref: "#/definitions/signUpResponse" }
  } */
  try {
    const signUpResult = await authService.handleSignup(req)
    return res.status(200).json(signUpResult)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export default { login, signup }
