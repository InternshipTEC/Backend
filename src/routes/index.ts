import express from 'express'
import { verifyToken } from '../middleware/token'
import { router as authRoutes } from './auth/authRoutes'
import { router as emailRouter } from './email/emailRoutes'
import { router as eventRoutes } from './event/eventRoutes'
import { router as transactionRoutes } from './transaction/transactionRoutes'
import { router as userRoutes } from './user/userRoutes'

const router = express.Router()

router.use('/email', verifyToken, emailRouter)
router.use('/auth', authRoutes)
router.use('/event', verifyToken, eventRoutes)
// router.use('/absen', absenRoutes)
router.use('/users', verifyToken, userRoutes)
router.use('/transaction', verifyToken, transactionRoutes)

export { router }
