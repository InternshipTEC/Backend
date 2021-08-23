import express from 'express'
import { router as emailRouter } from './email/index'
import { router as authRoutes } from './auth/authRoutes'
import { router as userRoutes } from './user/userRoutes'

const router = express.Router()

router.use('/email', emailRouter)
router.use('/auth', authRoutes)
router.use('/user', userRoutes)

export { router }
