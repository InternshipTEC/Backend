import { body } from 'express-validator'
import { requestValidator } from '../middleware/validation'

export const loginCheck = [body('email').isEmail(), body('password').exists(), requestValidator]

export const signupCheck = [body('email').isEmail(), body('password').exists(), requestValidator]
