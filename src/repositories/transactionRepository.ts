import { DeleteResult, getConnection, getManager, getRepository } from 'typeorm'
import { Transaction } from '../models/Transaction'

export const getTransactionById = async (id: string): Promise<Transaction> => {
  try {
    const transaction = await getRepository(Transaction).findOne({ id })
    return transaction
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllTransaction = async (): Promise<Transaction[]> => {
  try {
    const allTransaction = await getRepository(Transaction).find({ relations: ['users'] })
    return allTransaction
  } catch (err) {
    throw TypeError(err)
  }
}

export const createTransaction = async (props: Transaction): Promise<Transaction> => {
  try {
    let transaction = new Transaction()
    transaction = props
    const newTransaction = await getManager().save(transaction)
    return newTransaction
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateTransaction = async (id: string, props: Transaction): Promise<any> => {
  delete props.users;
  try {
    const updated = await getConnection()
      .createQueryBuilder()
      .update(Transaction)
      .set(props)
      .where('id = :id', { id })
      .execute()
    return updated
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteTransaction = async (id: string): Promise<DeleteResult> => {
  try {
    const deleteResult = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Transaction)
      .where('id = :id', { id })
      .execute()
    return deleteResult
  } catch (err) {
    throw TypeError(err)
  }
}
