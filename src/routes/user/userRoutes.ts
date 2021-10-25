import express from 'express'
import * as userController from '../../controllers/userController'
import * as absenContoller from '../../controllers/absenController'
import { postCheck } from '../../validation/userRoutesValidation'
import { verifyAdmin } from '../../middleware/token'

const router = express.Router()

router.get('/fyp/:id', userController.getUserWithFypProfile)

router.get('/:id', userController.getUser)

router.get('/:id/absen', absenContoller.getAbsenByUserId)

router.get('/', userController.getAllUser)

router.post('/', postCheck, verifyAdmin, userController.createUser)

// TODO -- wrong naming convention
router.put('/fyp/:id', userController.updateUserFypProfile)

router.put('/:id', userController.updateUser)

router.delete('/:id', verifyAdmin, userController.deleteUser)

export { router }
