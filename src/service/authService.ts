import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

const checkPassword = async (userPassword:string, reqPassword:string) : Promise<Boolean> => {
	try{
		const encrypt_result = await bcrypt.compare(userPassword, reqPassword)
		return encrypt_result
	} catch(err) {
		throw TypeError(err)
	}
}

const generateAccessToken = (userId: String|any) => {
  return jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "1h" })
}

export {checkPassword, generateAccessToken}