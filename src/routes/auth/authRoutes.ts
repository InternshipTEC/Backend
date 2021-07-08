import express from 'express'
import authController from '../../controllers/authController'
import { loginCheck, signupCheck } from '../../validation/authRoutesValidation'

const router = express.Router()

router.post('/signup', loginCheck, authController.signup)

router.post('/login', signupCheck, authController.login)

export { router }
