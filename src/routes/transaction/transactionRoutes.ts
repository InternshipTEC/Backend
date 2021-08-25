import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as transactionController from '../../controllers/transactionController'

const router = express.Router()

router.get('/:id', transactionController.getTransaction)

router.get('/', transactionController.getAllTransaction)

router.post('/', transactionController.createTransaction)

router.put('/:id', verifyAdmin, transactionController.updateTransaction)

router.delete('/:id', verifyAdmin, transactionController.deleteTransaction)

export { router }
