import { getConnection, getManager, getRepository } from 'typeorm'
import { User } from '../models/User'
import { validate } from 'class-validator'
import { Absen } from '../models/Absen'

const getUserById = async (id: string): Promise<any> => {
  try {
    const user = await getRepository(User).findOne({ id }, { relations: ['transaction'] })
    console.log(user)
    delete user.password
    return { ...user, transaction: !!user.transaction }
  } catch (err) {
    throw TypeError(err)
  }
}

const getAllUser = async (): Promise<User[]> => {
  try {
    const allUser = await getManager()
      .createQueryBuilder(User, 'user')
      .loadRelationCountAndMap('user.absenPercentage', 'user.absen')
      .getMany()
    return allUser
  } catch (err) {
    throw TypeError(err)
  }
}

export const getUsersWithTransactionId = async (transactionId: string) => {
  try {
    const user = await getRepository(User)
      .createQueryBuilder()
      .where('transaction_id = :transactionId', { transactionId })
      .getMany()
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

const getUserByEmail = async (email: string): Promise<any> => {
  try {
    const user = await getRepository(User).findOne({ email })
    console.log(user)
    if (user) {
      return { ...user, transaction: true }
    }
    return user
  } catch (err) {
    throw TypeError(err)
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
    throw TypeError(err)
  }
}

const updateUser = async (id: string, props: User): Promise<any> => {
  try {
    const newUser = await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(props)
      .where('id = :id', { id })
      .execute()
    return newUser
  } catch (err) {
    throw TypeError(err)
  }
}

const deleteUser = async (id: string) => {
  try {
    const user = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute()
    return user
  } catch (err) {
    throw TypeError(err)
  }
}

export { getUserByEmail, getUserById, getAllUser, createUser, updateUser, deleteUser }
