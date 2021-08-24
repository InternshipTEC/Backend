import express from 'express'
import { router as emailRouter } from './email/emailRoutes'
import { router as authRoutes } from './auth/authRoutes'
import { router as userRoutes } from './user/userRoutes'
import { router as transactionRoutes } from './transaction/transactionRoutes'
import { verifyToken } from '../middleware/token'

const router = express.Router()

router.use('/email', verifyToken, emailRouter)
router.use('/auth', authRoutes)
router.use('/users', verifyToken, userRoutes)
router.use('/transaction', verifyToken, transactionRoutes)

export { router }
