import { Request, Response } from "express";
import * as userService from "../service/userService";

export const getAllUser = async (req: Request, res: Response) => {
  /* 	#swagger.tags = ['User']
      #swagger.description = 'Endpoint get all user'*/

  /* #swagger.responses[200] = {
          description: "Get all user response",
          schema: { $ref: "#/definitions/getWholeUserResponse" }
  } */
  try {
    const users = await userService.getAllUser();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
};
