import express from 'express'
import { router as emailRouter } from './email/index'
import { router as authRoutes } from './auth/authRoutes'
import { router as userRoutes } from './user/userRoutes'
import { router as transactionRoutes } from './transaction/transactionRoutes'

const router = express.Router()

router.use('/email', emailRouter)
router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/transaction', transactionRoutes)

export { router }
