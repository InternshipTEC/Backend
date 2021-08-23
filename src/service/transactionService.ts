import * as transactionRepository from '../repositories/transactionRepository'
import * as userRepository from '../repositories/userRepository'
import { Request } from 'express'
import { Transaction } from '../models/Transaction'
import { User } from '../models/User'
import { DeleteResult } from 'typeorm'

export const getTransactionById = async (req: Request): Promise<Transaction> => {
  try {
    const transaction = await transactionRepository.getTransactionById(req.params.id)
    return transaction
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
  const {photoUrl, metode, media, noRekening, pemilikRekening, usersEmail } = req.body

  const users : User[] = []
  try {
    const transaction = new Transaction()
    transaction.photoUrl = photoUrl 
    transaction.metode = metode
    transaction.media = media
    transaction.noRekening = noRekening
    transaction.pemilikRekening = pemilikRekening
    transaction.verified = false
    transaction.users = users
    const newTransaction = await transactionRepository.createTransaction(transaction)
    usersEmail.forEach(async (email:string) => {
      let user = new User();
      user = await userRepository.getUserByEmail(email)
      await userRepository.updateUser(user.id, {...user, transaction:newTransaction})
      users.push(user)
    });
    return newTransaction 
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateTransaction = async (req: Request): Promise<Transaction> => {
  try {
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