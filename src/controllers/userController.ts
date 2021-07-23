import { Request, Response } from "express";
import * as userService from "../service/userService";

const getUser = async (req: Request, res: Response) => {
  /* 	#swagger.tags = ['User']
      #swagger.description = 'Endpoint to get a specific user by id'*/

  /* #swagger.responses[200] = {
          description: "Get user response",
          schema: { $ref: "#/definitions/getUserResponse" }
} */
  try {
    const user = await userService.getUserById(req);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  /* 	#swagger.tags = ['User']
      #swagger.description = 'Endpoint get all user'*/

  /* #swagger.responses[200] = {
          description: "Get all user response",
          schema: { $ref: "#/definitions/getAllUserResponse" }
  } */
  try {
    const users = await userService.getAllUser();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const createUser = async (req: Request, res: Response) => {
  /* 	#swagger.tags = ['User']
      #swagger.description = 'Endpoint create a user'*/

  /*	#swagger.parameters['obj'] = {
      in: 'body',
      description: 'Create user request',
      required: true,
      schema: { $ref: "#/definitions/postUserRequest" }
  } */

  try {
    const user = await userService.createUser(req);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const updateUser = async (req: Request, res: Response) => {
  /* 	#swagger.tags = ['User']
      #swagger.description = 'Endpoint to update a specific user'*/

  /*	#swagger.parameters['obj'] = {
      in: 'body',
      description: 'Update user request',
      required: true,
      schema: { $ref: "#/definitions/putUserRequest" }
} */
  try {
    const user = await userService.updateUser(req);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  /* 	#swagger.tags = ['User']
      #swagger.description = 'Endpoint to delete a specific user'*/
  try {
    const user = await userService.deleteUser(req);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default { getUser, createUser, getAllUser, updateUser, deleteUser };
