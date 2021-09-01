import * as transactionRepository from '../repositories/transactionRepository'
import * as userRepository from '../repositories/userRepository'
import * as tempUserRepository from '../repositories/tempUserRepository'
import { Request } from 'express'
import { Transaction } from '../models/Transaction'
import { User } from '../models/User'
import { DeleteResult } from 'typeorm'

export const getTransactionById = async (req: Request): Promise<any> => {
  try {
    const transaction = await transactionRepository.getTransactionById(req.params.id)
    const registeredUsers = await userRepository.getUsersWithTransactionId(transaction.id)
    let user : Array<any> = registeredUsers.map(user=>user.email)
    const tempusers = await tempUserRepository.getTempUserWithUniqueIdenfitier(transaction.uniqueIdentifier)
    tempusers.forEach(tempuser=>user.push(tempuser.email))
    return {...transaction, user}
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllTransaction = async (): Promise<Transaction[]> => {
  try {
    const transactions = await transactionRepository.getAllTransaction()
    return transactions
  } catch (err) {
    throw TypeError(err)
  }
}

export const createTransaction = async (req: Request): Promise<Transaction> => {
  const { photoUrl, nominal, media, noRekening, pemilikRekening, usersEmail, uniqueIdentifier } = req.body

  const users: User[] = []
  try {
    const transaction = new Transaction()
    transaction.photoUrl = photoUrl
    transaction.nominal = nominal
    transaction.uniqueIdentifier = uniqueIdentifier
    transaction.media = media
    transaction.noRekening = noRekening
    transaction.pemilikRekening = pemilikRekening
    transaction.verified = false
    transaction.users = users
    const newTransaction = await transactionRepository.createTransaction(transaction)
    const tempusers: Array<string> = []
    usersEmail.forEach(async (email: string) => {
      let user = new User()
      user = await userRepository.getUserByEmail(email)
      if (user) {
        await userRepository.updateUser(user.id, { ...user, transaction: newTransaction })
      } else {
        await tempUserRepository.createTempUser({ email, uniqueIdentifier })
      }
    })
    const responsePayload: any = { ...newTransaction }
    tempusers.forEach((tempuser: any) => {
      responsePayload.users.push(tempuser)
    })
    return responsePayload
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateTransaction = async (req: Request): Promise<Transaction> => {
  const { users } = req.body
  try {
    users.forEach(async (user: any) => {
      await userRepository.updateUser(user.id, {
        ...user,
        verified: req.body.verified,
      })
    })
    const transaction = await transactionRepository.updateTransaction(req.params.id, req.body)
    return transaction
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteTransaction = async (req: Request): Promise<DeleteResult> => {
  try {
    const result = await transactionRepository.deleteTransaction(req.params.id)
    return result
  } catch (err) {
    throw TypeError(err)
  }
}
