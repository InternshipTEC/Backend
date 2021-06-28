import express from 'express'
import { body } from 'express-validator'
import authController from '../../controllers/authController'
import {requestValidator} from '../../middleware/validation'

const router = express.Router()

router.post('/signup', 
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').exists(),
  requestValidator,
  authController.signup)

router.post('/login', 
  body('email').isEmail(),
  body('password').exists(),
  requestValidator,
  authController.login)

export { router }
