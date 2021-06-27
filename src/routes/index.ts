import express, { Request, Response } from 'express'
import {router as authRoutes} from './auth/authRoutes'
import {router as userRoutes} from './user/userRoutes'

const router = express.Router()

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export { router }

