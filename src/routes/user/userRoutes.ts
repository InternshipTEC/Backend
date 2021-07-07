import express from 'express'
import userController from '../../controllers/userController'
import { postCheck } from './userRoutes.check'

const router = express.Router()

router.get('/all', userController.getAllUser)

router.get('/:id', userController.getUser)

router.post('/', postCheck, userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

export { router }
