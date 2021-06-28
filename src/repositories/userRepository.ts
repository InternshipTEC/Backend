import { getConnection, getManager, getRepository } from 'typeorm'
import { User } from '../models/User'
import { validate } from 'class-validator'

const getUserById = async (id: String): Promise<User> => {
  try {
    const user = await getRepository(User).findOne({ id })
    return user
  } catch (err) {
    console.log(err)
    return null
  }
}

const getAllUser = async (): Promise<User[]> => {
  try {
    const allUser = await getRepository(User).find()
    return allUser
  } catch (err) {
    console.log(err)
    return null
  }
}

const getUserByEmail = async (email: String): Promise<User> => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder('user')
      .where('email = :email', { email:email.toString() })
      .getOne()
    return user
  } catch (err) {
    return err
  }
}

const createUser = async (props: User): Promise<User> => {
  try {
    let user = new User()
    user = props
    const errors = await validate(user)
    if (errors.length > 0) {
      throw new Error('Validation failed!')
    } else {
      await getManager().save(user)
    }
    return user
  } catch (err) {
    console.log(err)
    return null
  }
}

const updateUser = async (id: String, props: User): Promise<any> => {
  try {
    const new_user =  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set(props)
    .where("id = :id", {id})
    .execute()
    return new_user
  } catch (err) {
    return null
  }
}

const deleteUser = async (id: String) => {
  try{
    const user = await getConnection()
    .createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", {id})
    .execute(); 
    return user;
  } catch(err) {
    return null  
  } 
}

export { getUserByEmail, getUserById, getAllUser, createUser, updateUser, deleteUser }
