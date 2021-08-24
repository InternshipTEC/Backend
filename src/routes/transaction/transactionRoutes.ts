import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as transactionController from '../../controllers/transactionController'
import { postCheck } from '../../validation/transactionRoutesValidation'

const router = express.Router()

router.get('/:id', transactionController.getTransaction)

router.get('/', transactionController.getAllTransaction)

router.post('/', postCheck, verifyAdmin, transactionController.createTransaction)

router.put('/:id', verifyAdmin, transactionController.updateTransaction)

router.delete('/:id', verifyAdmin, transactionController.deleteTransaction)

export { router }
