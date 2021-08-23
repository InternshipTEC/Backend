import express from 'express'
import * as transactionController from '../../controllers/transactionController'
import { postCheck } from '../../validation/transactionRoutesValidation'

const router = express.Router()

router.get('/:id', transactionController.getTransaction)

router.get('/', transactionController.getAllTransaction)

router.post('/', postCheck, transactionController.createTransaction)

router.put('/:id', transactionController.updateTransaction)

router.delete('/:id', transactionController.deleteTransaction)

export { router }
