import * as bcrypt from 'bcrypt'
import { Request } from 'express';
import * as jwt from 'jsonwebtoken'
import * as userService from '../service/userService'

const handleLogin = async (req:Request) => {
	let user, passwordEncrypted;
	try {
		user = await userService.getUserByEmail(req.body.email);
	} catch (err) {
		throw TypeError(err);
	}

	try {
		passwordEncrypted = await checkPassword(req.body.password, user.password.toString())
		const accessToken = generateAccessToken(user.id);
		return {user, accessToken};
	} catch (err) {
		throw TypeError(err);
	}
}

const handleSignup = async (req:Request) => {
	try {
		const user = await userService.createUser(req.body);
		const accessToken = generateAccessToken(user.id);
		return {user, accessToken}
	} catch (err) {
		throw TypeError(err);
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

const generateAccessToken = (userId:String) : String => {
	return jwt.sign(userId, process.env.JWT_SECRET)
}

export {handleLogin, handleSignup, checkPassword, generateAccessToken}