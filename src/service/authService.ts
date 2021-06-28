import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { User } from '../models/User'

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

export {checkPassword, generateAccessToken}