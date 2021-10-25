import express from 'express'
import { verifyToken } from '../middleware/token'
import { router as authRoutes } from './auth/authRoutes'
import { router as emailRouter } from './email/emailRoutes'
import { router as eventRoutes } from './event/eventRoutes'
import { router as transactionRoutes } from './transaction/transactionRoutes'
import { router as userRoutes } from './user/userRoutes'
import { router as absenRoutes } from './absen/absenRoutes'
import { router as tugasRoutes } from './tugas/tugasRoutes'
import { router as fypBlogRoutes } from './fypBlog/fypBlogRoutes'
import { router as hasilTugasRoutes } from './hasilTugas/hasilTugasRoutes'
import { router as materiRoutes } from './materi/materiRoutes'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/email', verifyToken, emailRouter)
router.use('/event', verifyToken, eventRoutes)
router.use('/absen', verifyToken, absenRoutes)
router.use('/users', userRoutes)
router.use('/fyp-blog', verifyToken, fypBlogRoutes)
router.use('/hasilTugas', verifyToken, hasilTugasRoutes)
router.use('/tugas', verifyToken, tugasRoutes)
router.use('/transaction', verifyToken, transactionRoutes)
router.use('/materi', verifyToken, materiRoutes)

export { router }
