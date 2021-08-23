import { body } from 'express-validator'
import { requestValidator } from '../middleware/validation'

export const postCheck = [body('name').notEmpty(), body('email').isEmail(), body('password').exists(), body('nim').exists(), requestValidator]
