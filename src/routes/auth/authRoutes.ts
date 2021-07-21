import express from 'express'
import authController from '../../controllers/authController'
import { loginCheck, signupCheck } from '../../validation/authRoutesValidation'

const router = express.Router()

router.post('/signup', signupCheck, authController.signup)

router.post('/login', loginCheck, authController.login)

export { router }
