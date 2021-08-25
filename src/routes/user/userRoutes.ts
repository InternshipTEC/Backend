import express from 'express'
import userController from '../../controllers/userController'
import { postCheck } from '../../validation/userRoutesValidation'
import { verifyAdmin } from '../../middleware/token'

const router = express.Router()

router.get('/:id', userController.getUser)

router.get('/', userController.getAllUser)

router.post('/', postCheck, verifyAdmin, userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', verifyAdmin, userController.deleteUser)

export { router }
