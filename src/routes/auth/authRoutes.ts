import express, { Request, Response } from 'express'
import { check } from 'express-validator'
import authController from '../../controllers/authController'

const router = express.Router()

router.post('/signup', authController.signup)

router.post('/login',[
    check('name').notEmpty(),
    check('password').notEmpty(),
], authController.login)

router.get('/test', (req,res)=>{return res.json({msg:"hello"})})

export { router }

