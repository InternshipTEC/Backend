import * as bcrypt from 'bcrypt'
import { Request } from 'express';
import * as jwt from 'jsonwebtoken'
import * as userService from '../service/userService'
import { User } from '../models/User'

const handleLogin = async (req:Request) => {
	let user, passwordEncrypted;
	try {
		user = await userService.getUserById(req.params.id);
	} catch (err) {
		return err;
	}

	try {
		passwordEncrypted = await checkPassword(req.body.password, user.password.toString())
		const accessToken = generateAccessToken(user);
		return {user, accessToken};
	} catch (err) {
		return err;
	}
}

const handleSignup = async (req:Request) => {
	try {
		const user = await userService.createUser(req.body);
		const accessToken = generateAccessToken(user);
		return {user, accessToken}
	} catch (err) {
		return err
	}
}

const checkPassword = async (userPassword:string, reqPassword:string) : Promise<Boolean> => {
	try{
		const encrypt_result = await bcrypt.compare(userPassword, reqPassword)
		return encrypt_result
	} catch(err) {
		throw TypeError(err)
	}
}

const generateAccessToken = (user:User) : String => {
	return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" })
}

export {handleLogin, handleSignup, checkPassword, generateAccessToken}