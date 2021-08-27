import { Request, Response } from 'express'
import * as transactionService from '../service/transactionService'

export const getTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await transactionService.getTransactionById(req)
    return res.status(200).json({
      msg: 'get transaction success',
      data: transaction,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllTransaction = async (req: Request, res: Response) => {
  try {
    const transactions = await transactionService.getAllTransaction()
    return res
      .status(200)
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${transactions.length}`)
      .send(transactions)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transactions = await transactionService.createTransaction(req)
    return res.status(200).json({
      msg: 'create transaction success',
      data: transactions,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const transactions = await transactionService.updateTransaction(req)
    return res.status(200).json({
      msg: 'update transaction success',
      data: transactions,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const user = await transactionService.deleteTransaction(req)
    return res.status(200).json({
      msg: 'delete user success',
      data: user,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}
