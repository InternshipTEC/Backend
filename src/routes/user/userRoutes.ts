import express from 'express'
import { setContentRange } from '../../middleware/validation'
import userController from '../../controllers/userController'
import { postCheck } from '../../validation/userRoutesValidation'

const router = express.Router()

router.get('/:id', userController.getUser)

router.get('/', userController.getAllUser)

router.post('/', postCheck, userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', setContentRange, userController.deleteUser)

export { router }
