import * as userRepository from '../repositories/userRepository'
import * as bcrypt from 'bcrypt'
import { User } from '../models/User'
import { DeleteResult } from 'typeorm'

const getUserByEmail = async (email:string) : Promise<User> => {
	try {
		const user = await userRepository.getUserByEmail(email)
		return user;
	} catch (err) {
		throw TypeError(err);
	}
}

const getUserById = async (id:string) : Promise<User> => {
	try {
		const user = await userRepository.getUserById(id)
		return user;
	} catch (err) {
		throw TypeError(err)
	}
}

const getAllUser = async () : Promise<User[]> => {
	try {
		const users = await userRepository.getAllUser()
		return users
	} catch (err) {
		throw TypeError(err)
	}
}

const createUser = async (reqBody:any) : Promise<User> => {
	const { name, password, email } = reqBody
	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)
		const user = new User()
		user.name = name
		user.password = hashedPassword
		user.email = email
		const new_user = await userRepository.createUser(user)
		return new_user
	} catch (err) {
		throw TypeError(err)
	}
}

const updateUser = async (id:string,reqBody:any) : Promise<User> => {
	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(reqBody.password, salt)
		let user;
		if(hashedPassword){
			user = await userRepository.updateUser(id,{...reqBody, password:hashedPassword})
			return user
		} else {
			throw TypeError("Password doesn't match!")
		}
	} catch (err) {
		throw TypeError(err)
	}
}

const deleteUser = async (id:string) : Promise<DeleteResult> => {
	try {
		const result = await userRepository.deleteUser(id);
		return result
	} catch(err) {
		throw TypeError(err)
	}
}

export { getUserByEmail, getUserById, createUser, getAllUser, updateUser, deleteUser }

