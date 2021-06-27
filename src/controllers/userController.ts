import {Request, Response} from 'express'
import {validationResult} from 'express-validator'
import * as userRepository from '../repositories/userRepository'
import * as bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken" 
import { User } from '../models/User'

const getUser = async (req:Request, res:Response) => {
    if(!inputValidator(req)) return res.status(400);
    return res.json(await userRepository.getUserById(req.params.id));
}

const getAllUser = async (req:Request, res:Response) => {
    if(!inputValidator(req)) return res.status(400);
    return res.json(await userRepository.getAllUser());
}

const createUser = async (req:Request, res:Response) => {
    if(!inputValidator(req)) return res.status(400);
    const {name, password, email} = req.body;
    try {
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User();
        user.name = name;
        user.password = hashedPassword;
        user.email = email;
        userRepository.createUser(user);
        res.json(user);
    } catch(err){
        return res.sendStatus(400).json(err);
    }
}

const inputValidator = (req:Request) => {
    const errors = validationResult(req);
    return (errors.isEmpty() ? true : false)
}
export default {getUser, createUser, getAllUser}