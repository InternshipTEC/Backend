import {Request, Response} from 'express'
import {validationResult} from 'express-validator'
import * as userRepository from '../repositories/userRepository'
import * as bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken" 
import { User } from '../models/User'

const login = async (req:Request,res:Response) => {
    if(!inputValidator(req)) return res.status(400);

    let user, encrypt_result;
    // rollback and commit research
    try {
        user = await userRepository.getUserByEmail(req.body.email); 
        encrypt_result = await bcrypt.compare(req.body.password, user.password.toString());
    } catch (err) {
        return res.sendStatus(400).send(err);
    }

    if(user && encrypt_result){
        const accessToken = generateAccessToken(user.id);
        return res.json({accessToken});
    } else {
        return res.sendStatus(400).send("User not found");
    }
}

const signup = async (req:Request,res:Response) => {
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

// research for expire time
const generateAccessToken = (userId:String) => {
    return jwt.sign(userId, 'secret', {expiresIn: "30m"})
}

// if valid, return true 
const inputValidator = (req:Request) => {
    const errors = validationResult(req);
    return (errors.isEmpty() ? true : false)
}

export default {login, signup}