import express, { Request, Response } from 'express'
import { check } from 'express-validator'
import userController from '../../controllers/userController'

const router = express.Router()

router.get('/:id',[
], userController.getUser)

router.get('/all', userController.getAllUser)

// router.post('/', [
//     check('name').notEmpty(),
//     check('password').notEmpty(),
//     check('email').isEmail().notEmpty(),
// ], userController.createUser)

// router.put('/:id', userController.updateUser)

// router.delete('/:id', [
//     check('id').notEmpty(),
// ], userController.deleteUser)

export { router }

